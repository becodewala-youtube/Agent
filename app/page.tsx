import { AgentsTable } from "@/components/agents-table";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Agent Management</h1>
      <AgentsTable />
    </main>
  );
}