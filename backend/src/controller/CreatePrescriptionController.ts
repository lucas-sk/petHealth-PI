import { Prescription } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreatePrescriptionController{
  async handle(request: Request, response: Response) {
    const { petid } = request.params;
    const { medicamento, times, prescriptionDate}: Prescription = request.body
    const prescription = await prismaClient.prescription.create({data: {
      medicamento, times, prescriptionDate, petid
    }})
    return response.json(prescription)
  }
}

