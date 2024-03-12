import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

//Para que todas as rotas definidas em routes.ts sejam acessíveis a partir do caminho raiz "/",
//é preciso passar "/" como o primeiro argumento para server.use():
router.get("/", (req, res) => {
  return res.send("Olá dev");
});

router.post("/teste", (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
