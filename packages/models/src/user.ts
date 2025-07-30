import { z } from "zod";
import { UserRoleSchema } from "./user-role";

export const UserSchema = z.object({
  id: z.uuidv7(),
  name: z.string(),
  email: z.email(),
  emailVerified: z.date(),
  image: z.url().optional(),
  role: UserRoleSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;
