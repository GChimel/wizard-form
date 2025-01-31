import { z } from "zod";

export const personalStepSchema = z.object({
  firstName: z.string().min(1, { message: "Informe seu nome" }),
  lastName: z.string().optional(),
  document: z.string().min(1, { message: "Informe seu documento" }),
});
