/*
  Warnings:

  - You are about to drop the column `vetId` on the `prescriptions` table. All the data in the column will be lost.
  - You are about to drop the column `data_aplicacao` on the `vaccines` table. All the data in the column will be lost.
  - You are about to drop the column `substancia` on the `vaccines` table. All the data in the column will be lost.
  - You are about to drop the `vaccineVetRecords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vetRecords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vets` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `petid` to the `prescriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prescriptionDate` to the `prescriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `times` to the `prescriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petid` to the `vaccines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vaccineDate` to the `vaccines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vaccineDateStart` to the `vaccines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "prescriptions" DROP CONSTRAINT "prescriptions_vetId_fkey";

-- DropForeignKey
ALTER TABLE "vaccineVetRecords" DROP CONSTRAINT "vaccineVetRecords_vaccineId_fkey";

-- DropForeignKey
ALTER TABLE "vaccineVetRecords" DROP CONSTRAINT "vaccineVetRecords_vetRecordId_fkey";

-- DropForeignKey
ALTER TABLE "vetRecords" DROP CONSTRAINT "vetRecords_petId_fkey";

-- DropForeignKey
ALTER TABLE "vetRecords" DROP CONSTRAINT "vetRecords_prescriptionId_fkey";

-- AlterTable
ALTER TABLE "prescriptions" DROP COLUMN "vetId",
ADD COLUMN     "petid" TEXT NOT NULL,
ADD COLUMN     "prescriptionDate" TEXT NOT NULL,
ADD COLUMN     "times" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vaccines" DROP COLUMN "data_aplicacao",
DROP COLUMN "substancia",
ADD COLUMN     "petid" TEXT NOT NULL,
ADD COLUMN     "vaccineDate" TEXT NOT NULL,
ADD COLUMN     "vaccineDateStart" TEXT NOT NULL;

-- DropTable
DROP TABLE "vaccineVetRecords";

-- DropTable
DROP TABLE "vetRecords";

-- DropTable
DROP TABLE "vets";

-- CreateTable
CREATE TABLE "Consults" (
    "id" TEXT NOT NULL,
    "consultsDate" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "petid" TEXT NOT NULL,

    CONSTRAINT "Consults_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_petid_fkey" FOREIGN KEY ("petid") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccines" ADD CONSTRAINT "vaccines_petid_fkey" FOREIGN KEY ("petid") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consults" ADD CONSTRAINT "Consults_petid_fkey" FOREIGN KEY ("petid") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
