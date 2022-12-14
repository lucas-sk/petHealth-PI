import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class ListConsultsController{
  async handle(request: Request, response: Response) {
    const consults = await prismaClient.consult.findMany();
    return response.json(consults)
  }
}

