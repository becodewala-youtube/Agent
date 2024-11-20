import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

interface TestChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TestChatDialog({ open, onOpenChange }: TestChatDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-2">
          <MessageSquare size={16} />
          <span>Test Chat</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Test Chat</DialogTitle>
        </DialogHeader>
        <div className="h-96 overflow-y-auto p-4 border rounded">
          {/* Chat messages would go here */}
        </div>
        <div className="flex space-x-2">
          <Input placeholder="Type your message..." />
          <Button className="bg-[#5f4ee1]">Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}