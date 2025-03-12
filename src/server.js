import app from "./app.js";
import swaggerUi from 'swagger-ui-express';
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;


const swaggerDocsPath = path.join(__dirname, "swagger.json");

const swaggerDocs = JSON.parse(fs.readFileSync(swaggerDocsPath, "utf-8"));


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});