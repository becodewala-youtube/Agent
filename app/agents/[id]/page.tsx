"use client";

import { AgentDetails } from "@/components/agent-details";
import { useParams } from "next/navigation";

export default function AgentPage() {
  const params = useParams();
  const agentId = params.id as string;

  return <AgentDetails agentId={agentId} />;
}