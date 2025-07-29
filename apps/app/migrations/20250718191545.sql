-- Create "sessions" table
CREATE TABLE "app"."sessions" ("sessionToken" text NOT NULL, "userId" uuid NOT NULL, "expires" timestamp NOT NULL, PRIMARY KEY ("sessionToken"));
-- Create "verificationToken" table
CREATE TABLE "app"."verificationToken" ("identifier" text NOT NULL, "token" text NOT NULL, "expires" timestamp NOT NULL, PRIMARY KEY ("identifier", "token"));
-- Create "accounts" table
CREATE TABLE "app"."accounts" ("userId" uuid NOT NULL, "type" text NOT NULL, "provider" text NOT NULL, "providerAccountId" text NOT NULL, "refresh_token" text NOT NULL, "access_token" text NOT NULL, "expires_at" integer NOT NULL, "token_type" text NOT NULL, "scope" text NOT NULL, "id_token" text NOT NULL, "session_state" text NOT NULL, PRIMARY KEY ("provider", "providerAccountId"), CONSTRAINT "fk_accounts_user" FOREIGN KEY ("userId") REFERENCES "app"."users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION);
