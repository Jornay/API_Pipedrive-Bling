import express from "express";
import { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DealsWithWonController } from "./controllers/DealsWithWonController";

dotenv.config();

const app = express();
const router = Router();

const dealsWithWonController = new DealsWithWonController();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Configura o cabeçalho Access-Control-Allow-Origin para permitir todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Configura os métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Configura os cabeçalhos permitidos
    next();
  });

const mongoUriConnection = process.env.DB_URI;

if (!mongoUriConnection) {
  throw new Error('MongoDB connection URI is missing');
}

// Conectando no mongo
mongoose.connect(mongoUriConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1); // Termina o processo em caso de erro de conexão
});

// Rotas
router.post("/users", dealsWithWonController.createDeals);
router.get("/users", dealsWithWonController.getAllDeals);

app.use(router);

// Iniciar o servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export {router}