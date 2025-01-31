import { z } from "zod";

export const personalStepSchema = z.object({
  firstName: z.string().min(1, { message: "Obrigatório" }),
  lastName: z.string().min(1, { message: "Obrigatório" }),
  document: z.string().min(1, { message: "Obrigatório" }),
});
