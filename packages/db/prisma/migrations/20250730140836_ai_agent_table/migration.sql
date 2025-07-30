-- CreateTable
CREATE TABLE "public"."AiAgent" (
    "id" UUID NOT NULL,
    "chatwootBotId" INTEGER NOT NULL,
    "chatwootAccountId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiAgent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AiAgent_chatwootBotId_key" ON "public"."AiAgent"("chatwootBotId");

-- AddForeignKey
ALTER TABLE "public"."AiAgent" ADD CONSTRAINT "AiAgent_chatwootAccountId_fkey" FOREIGN KEY ("chatwootAccountId") REFERENCES "public"."ChatwootAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
