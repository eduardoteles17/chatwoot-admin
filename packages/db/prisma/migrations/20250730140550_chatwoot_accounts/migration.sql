-- CreateTable
CREATE TABLE "public"."ChatwootAccount" (
    "id" UUID NOT NULL,
    "serverId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatwootAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserInChatwootAccount" (
    "userId" UUID NOT NULL,
    "chatwootAccountId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInChatwootAccount_pkey" PRIMARY KEY ("userId","chatwootAccountId")
);

-- AddForeignKey
ALTER TABLE "public"."UserInChatwootAccount" ADD CONSTRAINT "UserInChatwootAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserInChatwootAccount" ADD CONSTRAINT "UserInChatwootAccount_chatwootAccountId_fkey" FOREIGN KEY ("chatwootAccountId") REFERENCES "public"."ChatwootAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
