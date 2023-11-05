## Edilaine MVP-estore

Este é um MVP que foi solicitado no curso de **Desenvolvimento Full Stack da PUC RIO**, referente a Sprint: Desenvolvimento Back-end Avançado.
O mesmo trata-se de uma loja online, onde é possível vizualizar produtos, vindos do componete B e adiciona-los ao carrinho. Também é possível fazer o cadastro, vizualição e remoção de mensagens vindas do componente C.

![project3](https://github.com/Edilainecsilva/mvp_edilaineIII/assets/112878712/9e696b2a-7d94-459d-871e-cda563a0aa38)



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

    Na página detalhes do produto, o usuário pode:
    -Ver os detalhes do produto, como sua descrição, preço e imagem ampliada.
    -Adicionar o produto ao carrinho de compras.


## Componente B - Api externa
    Fake Store Api -https://fakestoreapi.com/


## Componente C - Api Python

    O componente C trata-se de uma API refente ao cadastro, vizualização e remocão de dados de Mensagens de clientes enviadas a uma loja online.
    A ligação com o componente A se encontra na página de Atendimento do front-end. O usuario poderá efetuar o cadastro, busca e remoção de mensagens cadastradas em um banco de dados sqlite. 


## Execução e instalação
    O trabalho foi dividido em 2 repositórios. Por favor leia os documentos 'readme' de cada repositório para a execusão dos mesmos.

## Apresentação e prototipação
    vídeo do projeto: https://www.youtube.com/watch?v=3dXqNUkRyqE&t=16s
    prototipação utilizando figma: https://www.figma.com/file/Jdt1xkFgVW2kSUJ5pdpnoA/mvp_edilaineIII?type=design&node-id=0%3A1&mode=design&t=zuCyxIhK8M0XTZ5P-1

# Referências
Api externa: https://fakestoreapi.com/

Todas as imagens do site e o diagrama utilizados neste projeto, foram feitas e editadas atráves da plataforma: https://www.canva.com

Outros trabalhos que foram inspiração e de grande ajuda para a construção deste mesmo:
-para a criação do front: https://www.youtube.com/watch?v=lGnuiAZCjuM&t=2694s
-usei como base meu trabalho anterior: https://github.com/Edilainecsilva/mvp-ehospital

# Observações
O trabalho ainda estará em andamento depois da correção e entrega da nota. Pretendo concertar o componente carrousel do MDBootstrap que está dando um erro todas a vezes que é chamado. Por isso não o estou chamando o mesmo na pagina inicial. E também pretendo implementar a função compra, para o usuário poder finalizar a compra depois de produtos adicionados ao carrinho.

