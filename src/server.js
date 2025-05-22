import app from "./app";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const swaggerDocsPath = path.join(__dirname, "../src/swagger.json");
const swaggerDocs = JSON.parse(fs.readFileSync(swaggerDocsPath, "utf-8"));


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
