import app from "./app.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.js"; // substitui o JSON

const PORT = process.env.PORT || 8080;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em: http://localhost:${PORT}/api-docs`);
});
