from sqlalchemy import Column, String, Integer, DateTime
from datetime import datetime
from typing import Union


from  model import Base


class Mensagem(Base):
    __tablename__ = 'mensagem'

    id = Column("pk_mensagem", Integer, primary_key=True)
    nome = Column(String(140), unique=True)
    email = Column(String(50))
    telefone = Column(Integer)
    data_insercao = Column(DateTime, default=datetime.now())
    msg = Column(String(200))
     

    def __init__(self, nome:str, email:str, telefone:int, msg:str,
                 data_insercao:Union[DateTime, None] = None):
        """
        Cria uma mensagem

        Arguments:
            nome: nome do cliente.
            email: contado do cliente
            telefone: contado do cliente
            mensagem: para descrever um comentario, sugestão ou critica referente a loja e produtos
            data_insercao: data de quando a mensagem foi inserida à base
        """
        self.nome = nome
        self.email = email
        self.telefone = telefone
        self.msg = msg
        if data_insercao:
            self.data_insercao = data_insercao