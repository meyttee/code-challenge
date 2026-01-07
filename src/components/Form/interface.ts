import type z from "zod";
import type { schema } from "./schema";

type formType = z.infer<typeof schema>;

export type { formType };
