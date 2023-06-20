import { Router } from "express";
const dotenv = require('dotenv');
import mongoose from "mongoose";
import { DealsWithWonController } from "./controllers/DealsWithWonController";

dotenv.config()

const mongoUriConnection = process.env.DB_URI

if (!mongoUriConnection) {
    throw new Error('MongoDB connection URI is missing');
}

//Connectando no mongo
mongoose.connect(mongoUriConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
//----

const router = Router();

const dealsWithWonController = new DealsWithWonController();

router.post("/users", dealsWithWonController.createDeals);
router.get("/users", dealsWithWonController.getAllDeals)

export { router };