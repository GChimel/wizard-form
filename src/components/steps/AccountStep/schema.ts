import { z } from "zod";

export const accountStepSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }),
});
