"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import  Button  from "@/app/shared/ui/button"
import FileUpload from "./file-upload"
import FormField from "./form-field"
import type { EmployeeData, EmployeeFormProps } from "@/app/types/add-employee-type"

const initialEmployeeData: EmployeeData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  position: "",
  images: [],
}

export default function AddEmployeeForm({
  onSubmit,
  onCancel,
  initialData = {},
  isLoading = false,
}: EmployeeFormProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    ...initialEmployeeData,
    ...initialData,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmployeeData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (files: File[]) => {
    setEmployeeData((prev) => ({ ...prev, images: files }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(employeeData)
  }

  const handleCancel = () => {
    onCancel?.()
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-6">
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
            type="button"
            onClick={handleCancel}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-2xl font-semibold text-gray-800">Add Employee</h1>
        </div>

        {/* Form Content */}
        <div className="space-y-8">
          {/* Employee Information Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-1">Employee Information</h2>
            <p className="text-gray-500 text-sm mb-6">Most important information about the employee</p>
          </div>

          {/* Images Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Photo</h2>
            <FileUpload
              onFilesSelected={handleFileChange}
              maxFileSize={10 * 1024 * 1024} // 10MB
              acceptedTypes={["image/*"]}
              showSettings={true}
              allowMultiple={false}
            />
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="firstName"
              label="First Name"
              value={employeeData.firstName}
              onChange={handleInputChange}
              placeholder="Enter first name"
              required
            />

            <FormField
              id="lastName"
              label="Last Name"
              value={employeeData.lastName}
              onChange={handleInputChange}
              placeholder="Enter last name"
              required
            />

            <FormField
              id="email"
              label="Email Address"
              type="email"
              value={employeeData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              value={employeeData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />

            <FormField
              id="position"
              label="Position"
              value={employeeData.position}
              onChange={handleInputChange}
              placeholder="Enter position"
              required
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>

        {/* Action Buttons - At Bottom */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8 border-t border-gray-200">
          <div className="flex-1 sm:flex-none sm:ml-auto sm:order-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-12 font-medium disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save Employee"}
            </Button>
          </div>
          <div className="flex-1 sm:flex-none sm:order-1">
            <Button
              variant="outline"
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 border-gray-300 px-8 py-3 h-12 font-medium"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
