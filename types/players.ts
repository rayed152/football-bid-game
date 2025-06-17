import { AddPlayerSchema } from "@/lib/validators/addPlayer";
import { z } from "zod";

export type AddPlayerResult =
  | {
      success: boolean;
    }
  | {
      error: z.ZodFormattedError<z.infer<typeof AddPlayerSchema>>;
    };
