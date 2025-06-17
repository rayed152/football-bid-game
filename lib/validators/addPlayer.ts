import { z } from "zod";

export const AddPlayerSchema = z.object({
  playerName: z.string().min(1, "Player name is required"),
  position: z.string().min(1, "Position is required"),
  rating: z.coerce.number().min(1).max(100),
  basePrice: z.coerce.number().min(0),
});

export type AddPlayerInput = z.infer<typeof AddPlayerSchema>;
