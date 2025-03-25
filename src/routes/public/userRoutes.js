import express from "express";
import { validarCadastro, validarLogin } from '../../middlewares/validateMiddleware.js'
import {cadastrarUsuario, loginUsuario} from "../../controllers/userController.js";

const router = express.Router();

router.post("/cadastro",validarCadastro,cadastrarUsuario);
router.post("/login",validarLogin,loginUsuario);

export default router;