import express from "express";
import userRoutes from "./routes/public/userRoutes.js";
import transactionRoutes from "./routes/private/transactionRoutes.js";
import cors from "cors"
const app = express();
app.use(express.json());


app.use(cors());
app.use("/", userRoutes);
app.use("/", transactionRoutes);

export default app;
