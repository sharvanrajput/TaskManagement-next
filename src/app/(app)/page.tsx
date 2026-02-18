
import { columns, task } from "@/components/columns";
import { DataTable } from "@/components/StudentTable";

async function getData(): Promise<task[]> {
  // Fetch data from your API here.
  return [
    {
      id: "TASK-001",
      title: "Design Landing Page",
      description: "Create responsive UI for the marketing landing page",
      createdBy: "Roop Kishore",
      assignedTo: "Amit Sharma",
      status: "in-progress",
    },
    {
      id: "TASK-002",
      title: "Implement Authentication",
      description: "Add login and signup with JWT authentication",
      createdBy: "Roop Kishore",
      assignedTo: "Neha Verma",
      status: "pending",
    },
    {
      id: "TASK-003",
      title: "API Integration",
      description: "Connect frontend with task management API",
      createdBy: "Rahul Singh",
      assignedTo: "Roop Kishore",
      status: "in-progress",
    },
    {
      id: "TASK-004",
      title: "Fix Mobile Responsiveness",
      description: "Resolve layout issues on small screens",
      createdBy: "Neha Verma",
      assignedTo: "Amit Sharma",
      status: "completed",
    },
    {
      id: "TASK-005",
      title: "Add Dark Mode",
      description: "Implement theme switcher with Tailwind",
      createdBy: "Rahul Singh",
      assignedTo: "Roop Kishore",
      status: "pending",
    },
  ]

}

export default async function Home() {

  const data = await getData()

  return (
    <div >
      <DataTable columns={columns} data={data} />
    </div>
  );
}
