import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateTeam() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create a Team
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Team Name</label>
            <Input type="text" placeholder="Enter team name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Manager Name
            </label>
            <Input type="text" placeholder="Enter manager name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Formation
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a formation" />
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto">
                <SelectItem value="3412">3-4-1-2</SelectItem>
                <SelectItem value="3421">3-4-2-1</SelectItem>
                <SelectItem value="343">3-4-3</SelectItem>
                <SelectItem value="352">3-5-2</SelectItem>
                <SelectItem value="41212(a)">4-1-2-1-2(a)</SelectItem>
                <SelectItem value="41212(b)">4-1-2-1-2(b)</SelectItem>
                <SelectItem value="4141">4-1-4-1</SelectItem>
                <SelectItem value="4222">4-2-2-2</SelectItem>
                <SelectItem value="4231(a)">4-2-3-1(a)</SelectItem>
                <SelectItem value="4231(b)">4-2-3-1(b)</SelectItem>
                <SelectItem value="4312">4-3-1-2</SelectItem>
                <SelectItem value="4321">4-3-2-1</SelectItem>
                <SelectItem value="433(a)">4-3-3(a)</SelectItem>
                <SelectItem value="433(b)">4-3-3(b)</SelectItem>
                <SelectItem value="433(d)">4-3-3(c)</SelectItem>
                <SelectItem value="433(c)">4-3-3(d)</SelectItem>
                <SelectItem value="433(e)">4-3-3(e)</SelectItem>
                <SelectItem value="442(a)">4-4-2(a)</SelectItem>
                <SelectItem value="442(b)">4-4-2(b)</SelectItem>
                <SelectItem value="451(a)">4-5-1(a)</SelectItem>
                <SelectItem value="451(b)">4-5-1(b)</SelectItem>
                <SelectItem value="5212">5-2-1-2</SelectItem>
                <SelectItem value="5221">5-2-2-1</SelectItem>
                <SelectItem value="532">5-3-2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
