import express from "express";
import userRoutes from "./routes/public/userRoutes.js";
import transactionRoutes from "./routes/private/transactionRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", transactionRoutes);

export default app;
