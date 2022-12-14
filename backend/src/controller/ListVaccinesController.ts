import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class ListVaccinesController{
  async handle(request: Request, response: Response) {
    const vaccines = await prismaClient.vaccine.findMany();
    return response.json(vaccines)
  }
}

