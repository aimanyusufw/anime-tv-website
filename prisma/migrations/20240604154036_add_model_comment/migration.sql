/*
  Warnings:

  - You are about to drop the column `Score` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[animeMalId,userId]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `score` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `Score`,
    ADD COLUMN `score` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `animeMalId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_animeMalId_userId_key` ON `Collection`(`animeMalId`, `userId`);

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
