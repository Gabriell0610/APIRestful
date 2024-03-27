import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá dev");
});

//A rota cidade sendo cadastrada vai ter que executar esse método de create
router.post("/cidades", CidadesController.create);

export { router };
