# DevHouse-api

Esta API REST básica foi desenvolvida com o objetivo de por em prática os conhecimentos adquiridos por meio de cursos online realizados através da plataforma da udemy. Sua principal função é efetuar cadastro e aluguel de casas.

**STACK PRINCIPAL:** *Javascript, NodeJS, Express, MongoDB, Mongoose & Padrões REST*

## Experiência Adquirida e o que foi utilizado no projeto

- Criação e consumo de API's
- Padrões REST
- Endpoints amigáveis
- Status Code
- Params e Querys
- Cors
- ESlint
- Prerettier
- Editorconfig
- Yup
- Multer
- Insominia

## Instalação

Observações:
- É necessário uma string de conexão com o MongoDB. Caso você não tenha uma ainda, você pode criar no atlas através [desse link](https://www.mongodb.com/cloud/atlas/register).
- Você também irá precisar ter o NodeJS e o NPM instalados no seu computador. [Clique aqui](https://nodejs.org/en/) para baixar o NodeJS. O NPM já vem com o NodeJS.

01. Baixe o repositório deste projeto no seu computador. Você poderá fazer isso através do botão "code" que tem ali em cima, basta clicar nele e em seguida em download ZIP.
02. Localize o arquivo recem baixado no seu computador e descompate-o.
03. Abra a pasta que descompactou e localize o arquivo app.js dentro da pasta src.
04. No arquivo app.js, substitua 'Sua string de conexão do MongoDB' pela sua string criada anteriormente.
05. Abra o Prompt de Comando do seu computador e navegue até a pasta onde você descompactou o arquivo.
06. Digite o comando `npm install` e aperte enter para instalar todas as dependencias.
07. Após o término da instalação. Digite o comando `npm run dev` e aperte enter.
08. Pronto! a API estará rodando na porta 3333.

## EndPoins

### Sessions: POST /sessions

Método para logar e cadastrar usuário. Após passar um email o usuário e cadastrado e loga, caso o email já esteja cadastrado ele apenas loga.

**Body*
```
{
  	"email": "example@example.com"
}
```

### Houses: POST /houses

Método para cadastrar nova casa. A imagem da casa é enviada através do file "filename" da requisição e o id do usuário é enviado através do header "user_id".

**Body*
```
{
	description: Descrição da casa
	price: 800
	location: Av. Tereza Cristina, 222
	status: true
}
```

### Houses: GET /houses ou GET /houses?propriety=value

Método para buscar todas as casas de acordo com o filtro de status selecionado. Para buscar pelo filtro basta adicionar o Query Params desejado.

**exemplo**
```
GET /houses?status=true
```

### Houses: PUT /houses

Método para editar informaçoes de uma casa que já esta cadastrada. A imagem e o id do usuario sao passados da mesma forma, porém tambem é preciso passar o id da casa que vai ter as informações editadas através do url. Ex.: /houses/idDaCasa.

**body*
```
	description: Descrição da casa
	price: 800
	location: Av. Tereza Cristina, 222
	status: true
}
```

### Houses: DELETE /houses

Método para deletar uma casa cadastrada. É necessario passar o 'house_id' pelo corpo da requisição e o id do usuário
através do header "user_id".

**body*
```
	description: Descrição da casa
	price: 800
	location: Av. Tereza Cristina, 222
	status: true
}
```

### Dashboard: GET /dashboard

Métodoque lista todas as casas de um usuário. Apenas é necessario passar o id do usuário através do header "user_id".

### Reserve: POST /houses/:house_id/reserve

Método para reservar uma casa. É necessário passar a data da reserva através do corpo, o id da casa desejada pela url e o id do usuario pelo header "user_id".

**exemplo de url**
```
GET /houses/idDaCasa/reserve
```

**Body*
```
{
	"date": "25 de Novembro"
}
```

### Reserve: GET /reserves

Método que lista todas as reservas de um usuário. Apenas é necessario passar o id do usuário através do header "user_id".

### Reserve: DELETE /reserves/cancel

Método para cancelar uma reserva. Apenas é necessario passar o id da reserva através do corpo da requisição "user_id".

**Body*
```
{
	"reserve_id": "id da reserva"
}
```

