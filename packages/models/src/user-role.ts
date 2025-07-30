import { z } from "zod";

export enum UserRole {
  Admin = "Admin",
  User = "User",
}

export const UserRoleSchema = z.enum(UserRole);
