import { Input } from "@/components/ui/input";

interface VoiceSidebarProps {
  onVoiceSelect: (voice: string, language: string) => void;
}

export function VoiceSidebar({ onVoiceSelect }: VoiceSidebarProps) {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Select Voice</h2>
      <Input
        type="text"
        placeholder="Search Voice/Language"
        className="mb-4"
      />
      <div className="space-y-4">
        {["English", "Spanish", "French"].map((language) => (
          <div key={language}>
            <h3 className="font-medium text-gray-600 mb-2">{language}</h3>
            {["Marie", "Sarah", "Mark", "Sam"].map((voice) => (
              <div
                key={voice}
                className="flex justify-between items-center p-2 bg-white rounded-lg mb-2 hover:bg-purple-50 cursor-pointer"
                onClick={() => onVoiceSelect(voice, language)}
              >
                <span>{voice}</span>
                <span className="text-xs bg-[#5f4ee1] text-white px-2 py-1 rounded">
                  {Math.random() > 0.5 ? "Female" : "Male"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}