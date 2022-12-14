import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class ListPrescriptionsController{
  async handle(request: Request, response: Response) {
    const prescriptions = await prismaClient.prescription.findMany();
    return response.json(prescriptions)
  }
}

