import { Request, Response } from "express";
import { getNameInfo } from "../../handlers";

export const nameController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {name} = req.params;
    const nameInfo = await getNameInfo(name)
    res.status(200).json(nameInfo);
  } catch (err) {
    const error = err as Error;
    res.status(500).send(error.message);
  }
};
