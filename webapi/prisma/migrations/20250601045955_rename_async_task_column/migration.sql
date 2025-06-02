/*
Warnings:

- You are about to drop the column `completedAt` on the `AsyncTask` table. All the data in the column will be lost.
- You are about to drop the column `createdAt` on the `AsyncTask` table. All the data in the column will be lost.
- You are about to drop the column `errorMessage` on the `AsyncTask` table. All the data in the column will be lost.
- You are about to drop the column `errorStack` on the `AsyncTask` table. All the data in the column will be lost.
- You are about to drop the column `startedAt` on the `AsyncTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AsyncTask"
RENAME COLUMN "completedAt" TO "completed_at";

ALTER TABLE "AsyncTask"
RENAME COLUMN "createdAt" TO "created_at":
ALTER TABLE "AsyncTask"
RENAME COLUMN "errorMessage" TO "error_message";

ALTER TABLE "AsyncTask"
RENAME COLUMN "errorStack" TO "error_stack_trace";

ALTER TABLE "AsyncTask" RENAME COLUMN "startedAt" TO "started_at";

ALTER TABLE "AsyncTask" RENAME TO "async_task";
