import express from "express";
import userRoutes from "./routes/public/userRoutes.js";
import transactionRoutes from "./routes/private/transactionRoutes.js";

const app = express();
app.use(express.json());



app.use("/", userRoutes);
app.use("/", transactionRoutes);

export default app;
