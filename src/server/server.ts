/* eslint-disable linebreak-style */
import express from "express";
import "dotenv/config";
import { router } from "./routes/";

const server = express();
//Toda config do servidor **

// Usando um middleware para poder acessar a solicitação do usuário dentro da rota
server.use(express.json());

//Para que todas as rotas definidas em routes.ts sejam acessíveis a partir do caminho raiz "/",
//é preciso passar "/" como o primeiro argumento para server.use():
server.use("/", router);

// Exportando o servidor para uso em outros arquivos
export { server };
