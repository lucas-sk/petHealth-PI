import { Vaccine } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateVaccineController{
  async handle(request: Request, response: Response) {
    const { petid } = request.params;
    const { name, vaccineDate, vaccineDateStart }: Vaccine = request.body
    const vaccine =  await prismaClient.vaccine.create({ data: {
      name, vaccineDate, vaccineDateStart, petid
    } });
    return response.json(vaccine)
  }
}

