"use server";

import { db } from "@/lib/db";
import { CreateTeamSchema } from "@/lib/validators/createTeam";
import { revalidatePath } from "next/cache";

export async function createTeamAction(formData: FormData) {
  const validated = CreateTeamSchema.safeParse({
    teamName: formData.get("teamName"),
    managerName: formData.get("managerName"),
    formation: formData.get("formation"),
  });

  if (!validated.success) {
    return { error: validated.error.format() };
  }

  const { teamName, managerName, formation } = validated.data;

  await db.$transaction(async (prisma) => {
    const manager = await prisma.manager.create({
      data: {
        name: managerName,
      },
    });

    await prisma.team.create({
      data: {
        name: teamName,
        formation,
        manager: {
          connect: {
            id: manager.id,
          },
        },
      },
    });
  });

  revalidatePath("/");

  return { success: true };
}
