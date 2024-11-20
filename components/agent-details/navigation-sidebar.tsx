import { Mic, Settings, Hash } from "lucide-react";

export function NavigationSidebar() {
  return (
    <div className="w-16 bg-[#5f4ee1] p-4 flex flex-col items-center space-y-6">
      <Mic className="text-white" size={24} />
      <Settings className="text-white" size={24} />
      <Hash className="text-white" size={24} />
    </div>
  );
}