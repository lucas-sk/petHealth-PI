import { Consult } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateConsultController{
  async handle(request: Request, response: Response) {
    const { petid } = request.params;
    const { diagnosis, comments, treatment, consultsDate}: Consult = request.body
    const consult = await prismaClient.consult.create({ data: {
      diagnosis, comments, treatment, consultsDate, petid
    } });
    return response.json(consult)
  }
}

