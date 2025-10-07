/*
  Warnings:

  - You are about to drop the column `slides` on the `Works` table. All the data in the column will be lost.
  - Added the required column `clientLink` to the `Works` table without a default value. This is not possible if the table is not empty.
  - Added the required column `live` to the `Works` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Works` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serverLink` to the `Works` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Works` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Works" DROP COLUMN "slides",
ADD COLUMN     "clientLink" TEXT NOT NULL,
ADD COLUMN     "live" TEXT NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL,
ADD COLUMN     "serverLink" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
