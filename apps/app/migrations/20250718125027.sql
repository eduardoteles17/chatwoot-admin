-- Drop schema named "public"
DROP SCHEMA "public" CASCADE;
-- Add new schema named "app"
CREATE SCHEMA "app";
-- Create "users" table
CREATE TABLE "app"."users" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "emailVerified" boolean NOT NULL DEFAULT false, "updatedAt" timestamp NOT NULL, PRIMARY KEY ("id"), CONSTRAINT "users_email_unique" UNIQUE ("email"));
