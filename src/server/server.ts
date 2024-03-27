/* eslint-disable linebreak-style */
import express from "express";
import "dotenv/config";
import { router } from "./routes/";

const server = express();
//Toda config do servidor **

// Usando um middleware para poder acessar a solicitação do usuário dentro da rota
server.use(express.json());

//Aqui está dizendo que o servidor vai utilizar todas as rotas que a gente cadastrar
server.use(router);

// Exportando o servidor para uso em outros arquivos
export { server };
