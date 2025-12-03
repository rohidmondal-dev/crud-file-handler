import z from "zod";
import { createSchema } from "./zodSchema";

export type CreateType = z.infer<typeof createSchema>;
