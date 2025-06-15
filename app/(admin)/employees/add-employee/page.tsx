"use client"

import { useAddEmployee } from "@/app/hooks/employee/useEmployee"
import AddEmployeeForm from "./add-employee-form"
import type { EmployeeData } from "@/app/types/add-employee-type"

export default function Home() {
  const {mutate} = useAddEmployee()
  const handleSubmit = (data: EmployeeData) => {
    mutate(data)
  }

  const handleCancel = () => {
    console.log("Form cancelled")
    // Here you would typically navigate back or reset the form
    // Example: router.back()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <AddEmployeeForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </main>
  )
}
