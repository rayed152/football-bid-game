import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddPlayerForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Player Name
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Team Name</label>
            <Input type="text" placeholder="Enter team name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Player Postion
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Player Postion" />
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto">
                <SelectItem value="ST">ST</SelectItem>
                <SelectItem value="CF">CF</SelectItem>
                <SelectItem value="LW">LW</SelectItem>
                <SelectItem value="RW">RW</SelectItem>
                <SelectItem value="CAM">CAM</SelectItem>
                <SelectItem value="LM">LM</SelectItem>
                <SelectItem value="RM">RM</SelectItem>
                <SelectItem value="CM">CM</SelectItem>
                <SelectItem value="CDM">CDM</SelectItem>
                <SelectItem value="LB">LB</SelectItem>
                <SelectItem value="LCB">LCB</SelectItem>
                <SelectItem value="RCB">RCB</SelectItem>
                <SelectItem value="RB">RB</SelectItem>
                <SelectItem value="GK">GK</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Player Rating
            </label>
            <Input type="number" placeholder="Player Rating" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Starting Price
            </label>
            <Input type="number" placeholder="Starting Price" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
