# **API_IntegrationPipedrive**

## 📃 **About**

&nbsp;&nbsp;&nbsp;&nbsp;This project consists of creating an application that has the ability to collect data with order status **Ganho** from the **Pipedrive** application and save them in the non-relational MongoDB database. 

<br>

---

## To Do

✅ Create accounts on Pipedrive and Bling platforms;

✅ Use the MongoDB database for data persistence;

✅ Create a table in the database aggregating the opportunities inserted in Bling by day and
amount;

✅ Create an integration between the Pipedrive and Bling platforms (The integration must seek the
opportunities with a status equal to won in Pipedrive, then enter them as an order in
Bling);

✅ Create endpoint to bring consolidated data from the bank;


## 🛠 **Technologies used**

The project was developed using the following technologies:

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
