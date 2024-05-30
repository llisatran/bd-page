

-- CreateTable
CREATE TABLE "Challenges" (
    "id" INTEGER NOT NULL,
    "code" INTEGER NOT NULL,
    "challenge" TEXT NOT NULL,
    "person" TEXT NOT NULL,

    CONSTRAINT "Challenges_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Challenges_code_key" ON "Challenges"("code");
