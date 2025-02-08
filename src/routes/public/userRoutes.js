import express from "express";
import { validarCadastro } from "../../controllers/userController.js";
import {cadastrarUsuario, loginUsuario} from "../../controllers/userController.js";

const router = express.Router();

router.post("/cadastro", validarCadastro, cadastrarUsuario);
router.post("/login", loginUsuario);

export default router;


