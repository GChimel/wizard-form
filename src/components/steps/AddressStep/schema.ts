import { z } from "zod";

export const addressStepSchema = z.object({
  state: z.string().min(1, { message: "Obrigatório" }),
  city: z.string().min(1, { message: "Obrigatório" }),
  street: z.string().min(1, { message: "Obrigatório" }),
});
