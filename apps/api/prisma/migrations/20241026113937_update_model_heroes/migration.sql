/*
  Warnings:

  - You are about to drop the `heroesValidation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `urlImage` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "heroes" ADD COLUMN     "urlImage" TEXT NOT NULL;

-- DropTable
DROP TABLE "heroesValidation";
