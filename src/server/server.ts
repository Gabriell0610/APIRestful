/* eslint-disable linebreak-style */
import express from "express";
import { router } from "./routes/";

const server = express();
//Toda config do servidor **

// Usando um middleware para poder acessar a solicitação do usuário dentro da rota
server.use(express.json());

server.use("/", router);

// Exportando o servidor para uso em outros arquivos
export { server };
