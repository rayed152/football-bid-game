"use server";

import { db } from "@/lib/db";
import { AddPlayerSchema } from "@/lib/validators/addPlayer";
import { revalidatePath } from "next/cache";

export async function addPlayerAction(formData: FormData) {
  const validated = AddPlayerSchema.safeParse({
    playerName: formData.get("playerName"),
    position: formData.get("position"),
    rating: formData.get("rating"),
    basePrice: formData.get("basePrice"),
    age: formData.get("age"),
    country: formData.get("country"),
  });

  if (!validated.success) {
    return { error: validated.error.format() };
  }

  const { playerName, position, rating, basePrice, age, country } =
    validated.data;

  await db.player.create({
    data: {
      name: playerName,
      position,
      rating,
      basePrice,
      age,
      country,
    },
  });

  revalidatePath("/");

  return { success: true };
}
