import { z } from "zod";

export const userSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  fone: z.string().min(1, "Telefone é obrigatório."),
  data_nascimento: z.string().min(1, "Data de nascimento é obrigatória."),
});
