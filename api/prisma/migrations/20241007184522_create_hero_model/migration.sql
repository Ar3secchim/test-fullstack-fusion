-- CreateTable
CREATE TABLE "heroes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "heroes_pkey" PRIMARY KEY ("id")
);
