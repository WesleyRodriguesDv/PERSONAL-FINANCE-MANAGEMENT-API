import express from "express";
import { verificarToken } from "../../middlewares/authMiddleware.js";
import { validarTransacao } from "../../middlewares/validateMiddleware.js";
import { adicionarTransacao, listarTransacoes } from "../../controllers/transactionController.js";

const router = express.Router();

router.post("/transacoes", verificarToken, validarTransacao, adicionarTransacao);
router.get("/transacoes", verificarToken, listarTransacoes);

export default router;
