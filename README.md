# **API_IntegrationPipedrive**

## 📃 **Sobre**

&nbsp;&nbsp;&nbsp;&nbsp;Esse projeto se consiste na criação de uma aplicação que tem a capacidade de realizar a coleta de dodos com status de pedido **Ganho** do aplicativo **Pipedrive** e salvando os mesmos no banco de dados não relacional MongoDB. 

<br>

---

## To Do

✅ Criar contas nas plataformas Pipedrive e Bling;
✅ Utilizar o banco de dados MongoDB para persistência dos dados;
✅ Criar uma tabela no banco de dados agregando as oportunidades inseridas no Bling por dia e
valor total;
Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as
oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no
Bling);
Criar endpoint para trazer os dados consolidados do banco;


## 🛠 **Tecnologias utilizadas**

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- ts-node-dev

---

## ⚙ **Requirements**
To run the project on your machine, make sure you have the following installed:

- Node.JS >= 10.16.2
- Yarn >= 1.17.3
- NPM >= 6.9.0

---

## 🔧 **Getting Started** 
To test the project, follow these steps:

1. Install the following software on your machine:

Node.js
Yarn
Git (to clone the repository)

<br>

2. Clone the repository to your local machine:

```
git clone https://github.com/Jornay/API_IntegrationPipedrive.git
```

<br>

3. Navigate to the project folder:

```
cd API_IntegrationPipedrive
```

<br>

4. Install project dependencies:

```
yarn install
```

<br>

5. Create the **.env** file and configure your environment variables based on the **.envExample** file.

<br>

6. Start the application:

```
yarn dev
```

<br>

7. The application should now be running on your machine. You can access it at http://localhost:3000 or in another PORT configurada in your .env file.

<br>

## Author
This project was developed by [Lucas de Abreu](https://github.com/Jornay).
