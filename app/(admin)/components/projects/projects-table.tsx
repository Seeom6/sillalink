import { memo } from "react"
import type { Project } from "@/app/types/projectTypes"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/shared/ui/table"
import { ProjectPhoto } from "./project-photo"
import { TechnologyIcons } from "./technology-icons"
import { ExecutorAvatars } from "./executor-avatars"
import { ProjectStatus } from "./project-status"
import { ExternalLink } from "lucide-react"

interface ProjectsTableProps {
  projects: Project[]
  isLoading?: boolean
  className?: string
}

const LoadingSkeleton = () => (
  <TableRow>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="w-16 h-12 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="flex gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="flex -space-x-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        ))}
      </div>
    </TableCell>
    <TableCell>
      <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
    </TableCell>
  </TableRow>
)

export const ProjectsTable = memo(({ projects, isLoading, className }: ProjectsTableProps) => {
  return (
    <div className={`rounded-lg border bg-white overflow-hidden ${className}`}>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="font-medium text-gray-600">Name Projects</TableHead>
            <TableHead className="font-medium text-gray-600">Photo</TableHead>
            <TableHead className="font-medium text-gray-600">Link Projects</TableHead>
            <TableHead className="font-medium text-gray-600">Technologies</TableHead>
            <TableHead className="font-medium text-gray-600">Description</TableHead>
            <TableHead className="font-medium text-gray-600">The executors</TableHead>
            <TableHead className="font-medium text-gray-600">Raised</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => <LoadingSkeleton key={index} />)
            : projects.map((project) => (
                <TableRow key={project.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    <ProjectPhoto src={project.photo} alt={`${project.name} thumbnail`} />
                  </TableCell>
                  <TableCell>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span className="truncate max-w-32">{project.link}</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <TechnologyIcons technologies={project.technologies} />
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-gray-600 line-clamp-2 max-w-48">{project.description}</p>
                  </TableCell>
                  <TableCell>
                    <ExecutorAvatars executors={project.executors} />
                  </TableCell>
                  <TableCell>
                    <ProjectStatus raised={project.raised} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  )
})

ProjectsTable.displayName = "ProjectsTable"
