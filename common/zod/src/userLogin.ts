import { z } from "zod";

export const userLoginSchema = z.object({
  number: z
    .string()
    .min(10, "Invalid phone number")
    .regex(/^[0-9]+$/, "Invalid phone number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one digit"),
});

export type userLoginType = z.infer<typeof userLoginSchema>;
