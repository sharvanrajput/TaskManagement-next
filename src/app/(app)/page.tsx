import { columns, task } from "@/components/columns"
import { DataTable } from "@/components/StudentTable"
import axios from "axios"

async function getData(): Promise<task[]> {
  try {
    const res = await axios.get("http://localhost:3000/api/task")

    // assuming API returns { success: true, data: [] }
    return res.data.data
  } catch (error) {
    console.error("Fetch error:", error)
    return []
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
