"use client"

import { EmployeesTable } from "../components/employees/employeeTable"

export default function EmployeesPage() {
  const handleAddUser = () => {
    console.log("Add new user")
    // Implement add user logic
  }

  const handleEditUser = (employee: any) => {
    console.log("Edit user:", employee)
    // Implement edit user logic
  }

  const handleDeleteUser = (employee: any) => {
    console.log("Delete user:", employee)
    // Implement delete user logic
  }

  const handleViewUser = (employee: any) => {
    console.log("View user:", employee)
    // Implement view user logic
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Employees</h1>
        <p className="text-gray-600">Manage your team members and their information</p>
      </div>

      <EmployeesTable
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
        onViewUser={handleViewUser}
      />
    </div>
  )
}
