import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";
import { useState } from "react";

interface TestCallDialogProps {
  onMakeCall: (name: string, phone: string) => Promise<void>;
}

export function TestCallDialog({ onMakeCall }: TestCallDialogProps) {
  const [selectedPhone, setSelectedPhone] = useState("");
  const [callerName, setCallerName] = useState("");
  const [callerPhone, setCallerPhone] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-2">
          <Phone size={16} />
          <span>Test Call</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make a Test Call</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Select value={selectedPhone} onValueChange={setSelectedPhone}>
            <SelectTrigger>
              <SelectValue placeholder="Select Phone Number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">+1 (555) 123-4567</SelectItem>
              <SelectItem value="2">+1 (555) 987-6543</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Enter Name"
            value={callerName}
            onChange={(e) => setCallerName(e.target.value)}
          />
          <Input
            placeholder="Enter Phone Number"
            value={callerPhone}
            onChange={(e) => setCallerPhone(e.target.value)}
          />
          <Button 
            onClick={() => onMakeCall(callerName, callerPhone)} 
            className="w-full bg-[#5f4ee1]"
          >
            Call Me
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}