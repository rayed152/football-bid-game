import { CreateTeamSchema } from "@/lib/validators/createTeam";
import { z } from "zod";

export type AddTeamResult =
  | {
      success: boolean;
    }
  | {
      error: z.ZodFormattedError<z.infer<typeof CreateTeamSchema>>;
    };
