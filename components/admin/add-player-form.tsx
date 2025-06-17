"use client";

import { useState } from "react";
import { addPlayerAction } from "@/app/actions/add-player";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { AddPlayerSchema } from "@/lib/validators/addPlayer";
import { AddPlayerResult } from "@/types/players";

export default function AddPlayerForm() {
  const [result, setResult] = useState<AddPlayerResult | null>(null);

  async function handleAction(formData: FormData) {
    const res = await addPlayerAction(formData);
    setResult(res);
  }

  return (
    <form action={handleAction}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-md shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Add Player
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Player Name
              </label>
              <Input
                name="playerName"
                type="text"
                placeholder="Enter player name"
              />
              {result && "error" in result && result.error?.playerName && (
                <p className="text-sm text-red-500">
                  {result.error.playerName._errors[0]}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Player Position
              </label>
              <Select name="position">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Player Position" />
                </SelectTrigger>
                <SelectContent className="max-h-48 overflow-y-auto">
                  {[
                    "ST",
                    "CF",
                    "LW",
                    "RW",
                    "CAM",
                    "LM",
                    "RM",
                    "CM",
                    "CDM",
                    "LB",
                    "LCB",
                    "RCB",
                    "RB",
                    "GK",
                  ].map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {result && "error" in result && result.error?.position && (
                <p className="text-sm text-red-500">
                  {result.error.position._errors[0]}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Player Rating
              </label>
              <Input name="rating" type="number" placeholder="Player Rating" />
              {result && "error" in result && result.error?.rating && (
                <p className="text-sm text-red-500">
                  {result.error.rating._errors[0]}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Starting Price
              </label>
              <Input
                name="basePrice"
                type="number"
                placeholder="Starting Price"
              />
              {result && "error" in result && result.error?.basePrice && (
                <p className="text-sm text-red-500">
                  {result.error.basePrice._errors[0]}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Add Player
            </Button>
            {result && "success" in result && result.success && (
              <p className="text-green-600 text-sm text-center">
                Player added successfully!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
