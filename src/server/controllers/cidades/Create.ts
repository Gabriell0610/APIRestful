import { Request, Response } from "express";

interface ICidade {
  name: string;
}

//Controller de create que serve para cadastrar o dado que vem do frontEnd
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  // const data: ICidade = req.body;
  // console.log(data.name);

  console.log(req.body.name);

  return res.send("Create!");
};
