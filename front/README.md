# Edilaine Front-end - MVP Estore

Este é um MVP que foi solicitado no curso de **Desenvolvimento Full Stack da PUC RIO**, referente a Sprint: Desenvolvimento Back-end Avançado.
O mesmo trata-se de uma loja online, onde é possível vizualizar produtos, vindos do componete B e adiciona-los ao carrinho. Também é possível fazer o cadastro, vizualição e remoção de mensagens vindas do componente C.

## Componente A - Front-end

 ---
 # Funcionalidades
    Na página inicial(home), o usuário pode:
    -Visualizar lista de produtos disponíveis na loja, onde cada produto contém imagem, titulo, categoria e preço.
    -Possui dois botões em cada produto, sendo possível adicionar o produto ao carrinho de compras ou ir para a página de detalhes do produto.

    Na página Estore é possível ter informações sobre a empresa.

    Na página Atendimento, o usuário pode:
    -Adicionar uma nova mensagem
    -Vizualizar outras mensagens já cadastradas
    -Excluir mensagem selecionada

    No sidebar aparece o carrinho de compras, o usuário pode:
    -Remover do carrinho o produto selecionado.
    -Ver quais produtos estão adicionados no carrinho.
    -Indicar a quantidade de cada produtos para compra.
    -Ver o valor total da compra.
    -Limpar o carrinho

    Na página detalhes do produto, o usuário pode:
    -Ver os detalhes do produto, como sua descrição, titulo, preço e imagem.
    -Adicionar o produto ao carrinho de compras. 


## Como executar o front

**Primeiro será necessário a execução da API.** No projeto da API você encontra as intruções para a execução.

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.


---
## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 3000:3000 front
```

Uma vez executando, para acessar a Front, basta abrir o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.



### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).