-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."UserRole" NOT NULL DEFAULT 'User';
