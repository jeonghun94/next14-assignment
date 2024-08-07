"use server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters"),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .regex(/\d/, "Password must include at least one digit"),
  email: z
    .string()
    .email()
    .regex(/@zod\.com$/, "Email must be a zod.com email"),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
