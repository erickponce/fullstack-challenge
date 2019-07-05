# Desafio Técnico - Fullstack
Comprometimento de tempo estimado: 3-6 horas. A tarefa não é cronometrada e você pode trabalhar no seu próprio ritmo.

## Task
Sua tarefa é desenvolver uma interface do usuário para que os usuários visualizem o carrinho de compras, incluindo os itens com seus descontos (caso existam) e os totais.

Infelizmente, você só tem acesso a uma API legacy de terceiros para acessar os registros, porém é uma API muito pouco confiável em que as entradas podem ter duplicatas, elas podem não ser recuperadas na ordem em que ocorreram ou podem conter alguns dados incoerentes.

Independentemente da API não confiável, sua tarefa é exibir os registros o mais preciso possível para os usuários.

## Ferramentas
* Você deve implementar o servidor em NodeJS, caso queira também pode ser implementado em Python.
* Você é livre para usar qualquer tecnologia de frontend que você acha que será mais adequada para a tarefa (Angular é um Plus)
* Caso implemente o servidor em NodeJS, você deve usar o JavaScript moderno (ES6) e as melhores práticas. (TypeScript é um plus)
* Caso implemente o servidor em Python o framework Django é um plus.

# WIREFRAME para referencia
![alt text](https://raw.githubusercontent.com/erickponce/fullstack-challenge/master/wireframe.png)

## Requisitos

### 1. Implemente os seguintes endpoints:

GET / | retorna status 200 e um corpo de resposta em branco

GET /cart/{file-name} | aceita uma variável de caminho especificando o nome de um arquivo de dados para buscar no servidor. Solicitação de amostra: http://localhost:3000/cart/simple

### 2. Requisitos do lado do servidor

1. Buscar registros dos arquivos JSON encontrados no diretório /data
2. Garantir que todos os registros solicitados pelo cliente sejam devolvidos em ordem lógica em que foram adicionados no carrinho.

### 3. Requisitos do lado do cliente

1. Crie uma interface do usuário que solicite e renderize uma lista a partir do endpoint `/cart/{file-name}`
2. Crie suas próprias descrições lógicas incluindo possíveis descontos e categorias para os itens e exiba-as na coluna "Descrição" da tabela de itens. Isso pode ser feito no lado do servidor, se desejar.
3. Calcule os valores com base nos campos `value`, `amount` e `discount -> value`
4. Escreva uma folha de estilo (CSS) para sua aplicação.

**Nota:** Existe um **wireframe** de como exibir os registros incluído neste projeto. Observe que cada item tem uma lógica de descrição como "ELETRONIC Microwave with 10% discount". Você deve usar o wireframe fornecido como inspiração para a interface do usuário.

## Notas

Registros são definidos em arquivos JSON contendo um único array. Cada objeto na matriz representa um item do carrinho.

As transações têm ids, data, desconto e valores. O campo `discount` representa o um desconto aplicado no item, lembrando que existe uma data de validade para o desconto `valid_until`.
O campo `amount` é quantidade do mesmo item no carrinho.

Exemplo:

```
[
    {
        "id": "1",
        "date": "2019-10-01T05:00:00+00:00",
        "category": "ELETRONIC",
        "value": 1000.50,
        "amount": 1,
        "name": "Microwave",
        "discount": {
            "type": "SALE",
            "id": 76510190788,
            "value": 10,
            "valid_until": "2019-10-02T00:00:00+00:00",
            "description": "10% off!"
        }
    }
]
```

Este arquivo tem uma entrada, um item no carrinho. Foi aplicado nesse item um desconto válido de 10%.

`duplicate` é um arquivo que contém duas entradas com o mesmo id. Modifique o código do aplicativo para filtrar um deles e exibir o registro resultante.

O arquivo `complicated` tem mais tipos de erros. Descubra como transformar isso em registros corretos para o usuário antes de enviar para o cliente.

## Não requerido
* Você não precisa implementar autenticação para proteger o acesso ao seu serviço.
* Você não precisa suportar https
* Seu código não precisa estar pronto para a produção, embora você deva tomar decisões de projeto e tradeoffs corretos

## Entrega e implantação
* Fornecer acesso ao código
* Forneça um README com instruções breves de deploy para alguém fazer o deploy seu código e uma visão geral do aplicativo implementado

## Também será analizado
* Organização do código
* Facilidade da instalação da aplicação para avaliação

## Outras coisas a considerar
Você não é obrigado a escrever código para abordar esses pontos, mas deve considerá-los para discussão.

* Quais medidas devem ser tomadas para proteger o site que hospeda esse serviço?
* Responda a solicitações erradas ou mal formadas com códigos de status HTTP apropriados.
* Esteja preparado para discutir sua escolha de determinados componentes de interface do usuário (por exemplo, "Bootstrap", "Angular", "React" etc)
* Seja criativo!

## Prazo
O PRAZO MÁXIMO para entrega é de 4 dias, a partir da data de recebimento destas instruções.

## Dúvidas
Caso tenha alguma dúvida entre em contato pelo e-mail: erickleao.dsn.cir@alterdata.com.br