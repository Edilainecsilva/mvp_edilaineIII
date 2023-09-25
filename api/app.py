from email.mime import base
from sqlalchemy.exc import IntegrityError

from flask_openapi3 import Info, Tag
from flask_openapi3 import OpenAPI
from flask_cors import CORS
from flask import redirect

from model import Session, Mensagem
from logger import logger
from schemas import *


info = Info(title="API refente ao MVP da sprint III", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

# definindo tags
mensagem_tag = Tag(name="Mensagem", description="Adição, visualização e remoção de mensagens à base")


@app.get('/')
def home():
    return redirect('/openapi')


@app.post('/mensagem', tags=[mensagem_tag],
          responses={"200": MensagemViewSchema, "409": ErrorSchema, "400": ErrorSchema})
def add_mensagem(form: MensagemSchema):
    """Adiciona uma nova mensagem à base de dados

    Retorna uma representação das mensagems.
    """
    session = Session()
    mensagem = Mensagem(
        nome=form.nome,
        email=form.email,
        telefone=form.telefone,
        data_insercao=form.data_insercao,
        msg=form.msg
        )
    logger.debug(f"Adicionando mensagem do cliente com nome de: '{mensagem.nome}'")
    try:
        # adicionando mensagem
        session.add(mensagem)
        # efetivando o comando de adição de novo item na tabela
        session.commit()
        logger.debug(f"Adicionado mensagem do cliente: '{mensagem.nome}'")
        return apresenta_mensagem(mensagem), 200
    except IntegrityError as e:
        error_msg = "mensagem de mesmo nome do cliente já salvo na base :/"
        logger.warning(f"Erro ao adicionar mensagem '{mensagem.nome}', {error_msg}")
        return {"mesage": error_msg}, 409
    except Exception as e:
        error_msg = "Não foi possível salvar nova mensagem :/"
        logger.warning(f"Erro ao adicionar mensagem '{mensagem.nome}', {error_msg}")
        return {"mesage": error_msg}, 400


@app.get('/mensagem', tags=[mensagem_tag],
         responses={"200": MensagemViewSchema, "404": ErrorSchema})
def get_mensagem(query: MensagemBuscaSchema):
    """Faz a busca por uma mensagem a partir do id da mensagem

    Retorna uma representação das mensagens.
    """
    mensagem_id = query.id
    logger.debug(f"Coletando dados sobre mensagem #{mensagem_id}")
    session = Session()
    mensagem = session.query(Mensagem).filter(Mensagem.id == mensagem_id).first()
    if not mensagem:
        error_msg = "mensagem não encontrada na base :/"
        logger.warning(f"Erro ao buscar mensagem '{mensagem_id}', {error_msg}")
        return {"mesage": error_msg}, 400
    else:
        logger.debug(f"mensagem econtrado: '{mensagem.nome}'")
        return apresenta_mensagem(mensagem), 200


@app.get('/mensagens', tags=[mensagem_tag],
         responses={"200": MensagemListaViewSchema, "404": ErrorSchema})
def get_mensagens():
    """Lista de todas as mensagens cadastradas na base

    Retorna uma lista de representações de mensagems.
    """
    logger.debug(f"Coletando lista de mensagens")
    session = Session()
    mensagens = session.query(Mensagem).all()
    print(mensagens)
    if not mensagens:
        error_msg = "mensagem não encontrada na base :/"
        logger.warning(f"Erro ao buscar por lista de mensagens. {error_msg}")
        return {"mesage": error_msg}, 400
    else:
        logger.debug(f"Retornando lista de mensagens")
        return apresenta_lista_mensagem(mensagens), 200


@app.delete('/mensagem', tags=[mensagem_tag],
            responses={"200": MensagemDelSchema, "404": ErrorSchema})
def del_mensagem(query: MensagemBuscaSchema):
    """Deleta uma mensagem a partir do id informado

    Retorna uma mensagem de confirmação da remoção.
    """
    mensagem_id = query.id

    logger.debug(f"Deletando dados sobre mensagem #{mensagem_id}")
    session = Session()

    if mensagem_id:
        count = session.query(Mensagem).filter(Mensagem.id == mensagem_id).delete()

    session.commit()
    if count:
        logger.debug(f"Deletada a mensagem #{mensagem_id}")
        return {"mesage": "mensagem removida", "id": mensagem_id}
    else: 
        error_msg = "mensagem não encontrada na base :/"
        logger.warning(f"Erro ao deletar mensagem #'{mensagem_id}', {error_msg}")
        return {"mesage": error_msg}, 400
