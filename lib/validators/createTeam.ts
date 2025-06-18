import { z } from "zod";

export const CreateTeamSchema = z.object({
  teamName: z.string().min(1, "Team name is required"),
  managerName: z.string().min(1, "Manager name is required"),
  formation: z.string().min(1, "Formation is required"),
});

export type CreateTeamInput = z.infer<typeof CreateTeamSchema>;
