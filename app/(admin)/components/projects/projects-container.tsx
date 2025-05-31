"use client"

import { useState, useMemo, useCallback } from "react"
import { useProjects } from "@/app/hooks/project/useProjects"
import type { ProjectFilters } from "@/app/types/projectTypes"
import { ProjectsTableHeader } from "./projects-table-header"
import { ProjectsTable } from "./projects-table"
import { useDebounce } from "@/app/hooks/project/useDebounce"

export default function ProjectsContainer() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<ProjectFilters>({})

  const debouncedSearch = useDebounce(search, 300)

  const queryFilters = useMemo(
    () => ({
      ...filters,
      search: debouncedSearch || undefined,
    }),
    [filters, debouncedSearch],
  )

  const { data, isLoading, error, isError } = useProjects(queryFilters)

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value)
  }, [])

  const handleAddProject = useCallback(() => {
    // Implement add project logic
    console.log("Add project clicked")
  }, [])

  const handleFilter = useCallback(() => {
    // Implement filter logic
    console.log("Filter clicked")
  }, [])

  if (isError || error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading projects</h3>
            <p className="text-gray-600">{error?.message || "Please try again later"}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <ProjectsTableHeader
        searchValue={search}
        onSearchChange={handleSearchChange}
        onAddProject={handleAddProject}
        onFilter={handleFilter}
      />

      <ProjectsTable projects={data?.data || []} isLoading={isLoading} />

      {data && data.total > 0 && !isLoading && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {data.data.length} of {data.total} projects
        </div>
      )}

      {data && data.total === 0 && !isLoading && (
        <div className="flex items-center justify-center h-32">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        </div>
      )}
    </div>
  )
}
