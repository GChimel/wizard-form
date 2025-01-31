import { z } from "zod";

export const addressStepSchema = z.object({
  state: z.string().min(1, { message: "Informe seu estado" }),
  city: z.string().min(1, { message: "Informe sua cidade" }),
  street: z.string().min(1, { message: "Informe seu documento" }),
});
