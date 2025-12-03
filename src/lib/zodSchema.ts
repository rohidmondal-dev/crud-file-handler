import z from "zod";

export const createSchema = z.object({
	name: z.string().min(2, { error: "Name must be at least 2 characters" }),
	email: z.email({ error: "Invalid email" }),
	address: z
		.string()
		.min(5, { error: "Address must be at least 5 characters" }),
	contact: z.string().length(10, { error: "Number should be 10 characters" }),
});
