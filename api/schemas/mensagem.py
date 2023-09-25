from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class MensagemSchema(BaseModel):
    nome: str = "Elaine dos Santos"
    email: str = "elaine@gmail.com"
    telefone: int = 17992556589
    data_insercao = datetime.strptime('27/04/2023', '%d/%m/%Y').date()
    msg: str = "Sempre compro nessa loja. São produtos de ótima qualidade e preço justo!"
    

class MensagemBuscaSchema(BaseModel):
    id: Optional[int] = 1
   


class MensagemViewSchema(BaseModel):
    id: int = 1
    nome: str = "Elaine dos Santos"
    email: str = "elaine@gmail.com"
    telefone: int = 17992556589
    data_insercao = datetime.strptime('27/04/2023', '%d/%m/%Y').date()
    msg: str = "Sempre compro nessa loja. São produtos de ótima qualidade e preço justo!"
    


class MensagemDelSchema(BaseModel):
    mesage: str
    id: int

def apresenta_mensagem(mensagem):
     
    return {
        "id": mensagem.id,
        "nome": mensagem.nome,
        "email": mensagem.email,
        "telefone": mensagem.telefone,
        "data_insercao": mensagem.data_insercao,
        "msg": mensagem.msg,
    }


class MensagemListaViewSchema(BaseModel):
    mensagens: List[MensagemViewSchema]


def apresenta_lista_mensagem(mensagens):
    result = []
    for mensagem in mensagens:
        result.append(apresenta_mensagem(mensagem))
    return {"mensagens": result}