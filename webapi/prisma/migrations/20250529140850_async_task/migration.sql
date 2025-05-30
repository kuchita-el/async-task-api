-- CreateEnum
CREATE TYPE "AsyncTaskStatus" AS ENUM ('WAITING', 'RUNNING', 'COMPLETED', 'ERROR');

-- CreateTable
CREATE TABLE "AsyncTask" (
    "id" TEXT NOT NULL,
    "status" "AsyncTaskStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "errorMessage" TEXT,
    "errorStack" TEXT,
    "payload" JSONB NOT NULL,

    CONSTRAINT "AsyncTask_pkey" PRIMARY KEY ("id")
);
