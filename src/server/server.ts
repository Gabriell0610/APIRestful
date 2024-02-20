/* eslint-disable linebreak-style */
import express from "express";

const server = express();
//Toda config do servidor **

//Teste para vê se o 'servidor' está funcionando
server.get("/", (req, res) => {
  return res.send("Olá dev");
});

// Exportando o servidor para uso em outros arquivos
export { server };
