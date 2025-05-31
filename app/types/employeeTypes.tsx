export interface Employee {
  id: string
  name: string
  username: string
  email: string
  position: string
  status: "Active" | "Offline" | "Wait"
  date: string
  avatar?: string
}

export interface EmployeesResponse {
  data: Employee[]
  total: number
  page: number
  limit: number
}

export interface EmployeeFilters {
  search: string
  status: string
  page: number
  limit: number
}
