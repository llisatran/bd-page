/*
  Warnings:

  - You are about to drop the column `challenge` on the `Challenges` table. All the data in the column will be lost.
  - Added the required column `description` to the `Challenges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE challenges_id_seq;
ALTER TABLE "Challenges" DROP COLUMN "challenge",
ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('challenges_id_seq');
ALTER SEQUENCE challenges_id_seq OWNED BY "Challenges"."id";
