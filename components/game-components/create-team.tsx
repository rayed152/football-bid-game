"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { AddTeamResult } from "@/types/team";
import { createTeamAction } from "@/app/actions/create-team";
import { Button } from "../ui/button";

export default function CreateTeam() {
  const [teamResult, setTeamResult] = useState<AddTeamResult | null>(null);

  async function handleAction(formData: FormData) {
    const res = await createTeamAction(formData);
    setTeamResult(res);
  }

  return (
    <form action={handleAction}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-md shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Create a Team
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Team Name
              </label>
              <Input
                name="teamName"
                type="text"
                placeholder="Enter team name"
              />
              {teamResult &&
                "error" in teamResult &&
                teamResult.error?.teamName && (
                  <p className="text-sm text-red-500">
                    {teamResult.error.teamName._errors[0]}
                  </p>
                )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Manager Name
              </label>
              <Input
                name="managerName"
                type="text"
                placeholder="Enter manager name"
              />
              {teamResult &&
                "error" in teamResult &&
                teamResult.error?.managerName && (
                  <p className="text-sm text-red-500">
                    {teamResult.error.managerName._errors[0]}
                  </p>
                )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Formation
              </label>
              <Select name="formation">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a formation" />
                </SelectTrigger>
                <SelectContent className="max-h-48 overflow-y-auto">
                  {[
                    "3-4-1-2",
                    "3-4-2-1",
                    "3-4-3",
                    "3-5-2",
                    "4-1-2-1-2(a)",
                    "4-1-2-1-2(b)",
                    "4-1-4-1",
                    "4-2-2-2",
                    "4-2-3-1(a)",
                    "4-2-3-1(b)",
                    "4-3-1-2",
                    "4-3-2-1",
                    "4-3-3(a)",
                    "4-3-3(b)",
                    "4-3-3(c)",
                    "4-3-3(d)",
                    "4-3-3(e)",
                    "4-4-2(a)",
                    "4-4-2(b)",
                    "4-5-1(a)",
                    "4-5-1(b)",
                    "5-2-1-2",
                    "5-2-2-1",
                    "5-3-2",
                  ].map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {teamResult &&
                "error" in teamResult &&
                teamResult.error?.formation && (
                  <p className="text-sm text-red-500">
                    {teamResult.error.formation._errors[0]}
                  </p>
                )}
            </div>

            <Button type="submit" className="w-full">
              Create Team
            </Button>
            {teamResult && "success" in teamResult && teamResult.success && (
              <p className="text-green-600 text-sm text-center">Team Created</p>
            )}
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
