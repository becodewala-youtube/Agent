"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { NavigationSidebar } from "./agent-details/navigation-sidebar";
import { VoiceSidebar } from "./agent-details/voice-sidebar";
import { TestCallDialog } from "./agent-details/test-call-dialog";
import { TestChatDialog } from "./agent-details/test-chat-dialog";

interface AgentDetailsProps {
  agentId: string;
}

export function AgentDetails({ agentId }: AgentDetailsProps) {
  const [agent, setAgent] = useState({
    name: "",
    prompt: "",
    voice: "",
    language: "",
  });
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`https://api.retellai.com/v1/agents/${agentId}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          },
        });
        setAgent(response.data);
      } catch (error) {
        console.error("Error fetching agent details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgentDetails();
  }, [agentId]);

  const handleNameChange = async (value: string) => {
    try {
      await axios.patch(
        `https://api.retellai.com/v1/agents/${agentId}`,
        { name: value },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          },
        }
      );
      setAgent({ ...agent, name: value });
    } catch (error) {
      console.error("Error updating agent name:", error);
    }
  };

  const handlePromptChange = async (value: string) => {
    try {
      await axios.patch(
        `https://api.retellai.com/v1/agents/${agentId}`,
        { prompt: value },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          },
        }
      );
      setAgent({ ...agent, prompt: value });
    } catch (error) {
      console.error("Error updating agent prompt:", error);
    }
  };

  const handleTestCall = async (name: string, phone: string) => {
    try {
      await axios.post(
        "https://api.retellai.com/v1/calls",
        {
          agent_id: agentId,
          customer_number: phone,
          customer_name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          },
        }
      );
    } catch (error) {
      console.error("Error initiating test call:", error);
    }
  };

  const handleVoiceSelect = async (voice: string, language: string) => {
    try {
      await axios.patch(
        `https://api.retellai.com/v1/agents/${agentId}`,
        { voice, language },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          },
        }
      );
      setAgent({ ...agent, voice, language });
    } catch (error) {
      console.error("Error updating agent voice:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <NavigationSidebar />
      <VoiceSidebar onVoiceSelect={handleVoiceSelect} />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <Input
            value={agent.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="text-2xl font-bold w-64"
          />
          <div className="flex space-x-4">
            <TestCallDialog onMakeCall={handleTestCall} />
            <TestChatDialog open={chatOpen} onOpenChange={setChatOpen} />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Name</h2>
            <Input
              value={agent.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Prompt</h2>
            <Textarea
              value={agent.prompt}
              onChange={(e) => handlePromptChange(e.target.value)}
              className="w-full h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}