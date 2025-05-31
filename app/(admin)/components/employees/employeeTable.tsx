"use client"

import { useState, useCallback, useMemo } from "react"
import { MoreHorizontal, Info, Trash2 } from "lucide-react"
import { useEmployees } from "@/app/hooks/employee/useEmployee"
import  { Employee } from "@/app/types/employeeTypes"
import { EmployeeAvatar } from "./employeeAvatar"
import { StatusBadge } from "./employeeBadge"
import { EmptyState } from "./employeeStatus"
import { TableFilters } from "./tabelFilter"
import { TablePagination } from "./tablePagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/shared/ui/table"
import { Checkbox } from "@/app/shared/ui/checkbox"
import Button from "@/app/shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/shared/ui/dropdown-menu"
import { Badge } from "@/app/shared/ui/badge"

interface EmployeesTableProps {
  onAddUser?: () => void
  onEditUser?: (employee: Employee) => void
  onDeleteUser?: (employee: Employee) => void
  onViewUser?: (employee: Employee) => void
}

export const EmployeesTable = ({
  onAddUser = () => console.log("Add user"),
  onEditUser = (employee) => console.log("Edit user:", employee),
  onDeleteUser = (employee) => console.log("Delete user:", employee),
  onViewUser = (employee) => console.log("View user:", employee),
}: EmployeesTableProps) => {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    page: 1,
    limit: 10,
  })
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([])

  const { data, isLoading, error } = useEmployees(filters)

  const handleSearchChange = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search, page: 1 }))
  }, [])

  const handleStatusChange = useCallback((status: string) => {
    setFilters((prev) => ({ ...prev, status, page: 1 }))
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setFilters((prev) => ({ ...prev, page }))
  }, [])

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked && data?.data) {
        setSelectedEmployees(data.data.map((emp) => emp.id))
      } else {
        setSelectedEmployees([])
      }
    },
    [data?.data],
  )

  const handleSelectEmployee = useCallback((employeeId: string, checked: boolean) => {
    setSelectedEmployees((prev) => (checked ? [...prev, employeeId] : prev.filter((id) => id !== employeeId)))
  }, [])

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.total / data.limit) : 0
  }, [data])

  const isAllSelected = useMemo(() => {
    return data?.data && data.data.length > 0 && selectedEmployees.length === data.data.length
  }, [selectedEmployees.length, data?.data])

  const isIndeterminate = useMemo(() => {
    return selectedEmployees.length > 0 && selectedEmployees.length < (data?.data.length || 0)
  }, [selectedEmployees.length, data?.data.length])

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading employees. Please try again.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <TableFilters
        search={filters.search}
        status={filters.status}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
        onAddUser={onAddUser}
      />

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center space-x-4 p-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : !data?.data.length ? (
        <EmptyState onAction={onAddUser} />
      ) : (
        <>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={handleSelectAll}
                      ref={(el) => {
                        // Using HTMLInputElement since checkbox inputs support indeterminate
                        if (el && el.querySelector("input")) {
                          ; (el.querySelector("input") as HTMLInputElement).indeterminate = isIndeterminate
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead className="font-medium">Users</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">E-mail</TableHead>
                  <TableHead className="font-medium">Position</TableHead>
                  <TableHead className="font-medium">Date</TableHead>
                  <TableHead className="w-12"></TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.data.map((employee) => (
                  <TableRow key={employee.id} className="hover:bg-gray-50">
                    <TableCell>
                      <Checkbox
                        checked={selectedEmployees.includes(employee.id)}
                        onCheckedChange={(checked) => handleSelectEmployee(employee.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <EmployeeAvatar name={employee.name} avatar={employee.avatar} />
                        <div>
                          <div className="font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.username}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={employee.status} />
                    </TableCell>
                    <TableCell className="text-gray-900">{employee.email}</TableCell>
                    <TableCell className="text-gray-900 ">                    <Badge className="bg-primary text-gray-100" variant="destructive">{employee.position}</Badge></TableCell>
                    <TableCell className="text-gray-900">{employee.date}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onViewUser(employee)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Info className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onViewUser(employee)}>
                            <Info className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onEditUser(employee)}>Edit Employee</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onDeleteUser(employee)} className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <TablePagination currentPage={filters.page} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  )
}
