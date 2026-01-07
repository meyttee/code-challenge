import z from "zod";

const schema = z.object({
  title: z.string().trim().min(3),
  description: z.string().min(5),
});

export { schema };
