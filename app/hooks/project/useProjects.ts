"use client"

import { useQuery } from "@tanstack/react-query"
import type { ProjectsResponse, ProjectFilters } from "@/app/types/projectTypes"

// Mock API function - replace with your actual API call
const fetchProjects = async (filters: ProjectFilters): Promise<ProjectsResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const mockData = [
    {
      id: "1",
      name: "Dbhamz.com",
      photo: "/images/project-thumbnail.png",
      link: "https://dbhamz.com",
      technologies: [
        { id: "1", name: "React", icon: "/placeholder.svg?height=24&width=24" },
        { id: "2", name: "Next.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "3", name: "TypeScript", icon: "/placeholder.svg?height=24&width=24" },
        { id: "4", name: "Tailwind", icon: "/placeholder.svg?height=24&width=24" },
        { id: "5", name: "Node.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "6", name: "MongoDB", icon: "/placeholder.svg?height=24&width=24" },
      ],
      description: "This project is selling perfume in the Gulf region with advanced e-commerce features.",
      executors: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "4", name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "5", name: "Charlie Wilson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "6", name: "Diana Prince", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      raised: false,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "2",
      name: "Dbhamz.com",
      photo: "/images/project-thumbnail.png",
      link: "https://dbhamz.com",
      technologies: [
        { id: "1", name: "React", icon: "/placeholder.svg?height=24&width=24" },
        { id: "2", name: "Next.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "3", name: "TypeScript", icon: "/placeholder.svg?height=24&width=24" },
        { id: "4", name: "Tailwind", icon: "/placeholder.svg?height=24&width=24" },
        { id: "5", name: "PostgreSQL", icon: "/placeholder.svg?height=24&width=24" },
        { id: "6", name: "Prisma", icon: "/placeholder.svg?height=24&width=24" },
      ],
      description: "This project is selling perfume in the Gulf region with modern tech stack.",
      executors: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "4", name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "5", name: "Charlie Wilson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "6", name: "Diana Prince", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      raised: true,
      createdAt: "2024-01-02",
      updatedAt: "2024-01-02",
    },
    {
      id: "3",
      name: "Dbhamz.com",
      photo: "/images/project-thumbnail.png",
      link: "https://dbhamz.com",
      technologies: [
        { id: "1", name: "React", icon: "/placeholder.svg?height=24&width=24" },
        { id: "2", name: "Next.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "3", name: "TypeScript", icon: "/placeholder.svg?height=24&width=24" },
        { id: "4", name: "Tailwind", icon: "/placeholder.svg?height=24&width=24" },
        { id: "5", name: "Supabase", icon: "/placeholder.svg?height=24&width=24" },
      ],
      description: "This project is selling perfume in the Gulf region with real-time features.",
      executors: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "4", name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "5", name: "Charlie Wilson", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      raised: false,
      createdAt: "2024-01-03",
      updatedAt: "2024-01-03",
    },
    {
      id: "4",
      name: "Dbhamz.com",
      photo: "/images/project-thumbnail.png",
      link: "https://dbhamz.com",
      technologies: [
        { id: "1", name: "React", icon: "/placeholder.svg?height=24&width=24" },
        { id: "2", name: "Next.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "3", name: "TypeScript", icon: "/placeholder.svg?height=24&width=24" },
      ],
      description: "This project is selling perfume in the Gulf region with minimal setup.",
      executors: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      raised: true,
      createdAt: "2024-01-04",
      updatedAt: "2024-01-04",
    },
    {
      id: "5",
      name: "Dbhamz.com",
      photo: "/images/project-thumbnail.png",
      link: "https://dbhamz.com",
      technologies: [
        { id: "1", name: "React", icon: "/placeholder.svg?height=24&width=24" },
        { id: "2", name: "Next.js", icon: "/placeholder.svg?height=24&width=24" },
        { id: "3", name: "TypeScript", icon: "/placeholder.svg?height=24&width=24" },
        { id: "4", name: "Tailwind", icon: "/placeholder.svg?height=24&width=24" },
        { id: "5", name: "Firebase", icon: "/placeholder.svg?height=24&width=24" },
        { id: "6", name: "Stripe", icon: "/placeholder.svg?height=24&width=24" },
      ],
      description: "This project is selling perfume in the Gulf region with payment integration.",
      executors: [
        { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "4", name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "5", name: "Charlie Wilson", avatar: "/placeholder.svg?height=32&width=32" },
        { id: "6", name: "Diana Prince", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      raised: true,
      createdAt: "2024-01-05",
      updatedAt: "2024-01-05",
    },
  ]

  // Filter data based on search and raised status
  let filteredData = mockData

  if (filters.search) {
    filteredData = filteredData.filter(
      (project) =>
        project.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search!.toLowerCase()) ||
        project.link.toLowerCase().includes(filters.search!.toLowerCase()),
    )
  }

  if (filters.raised !== undefined) {
    filteredData = filteredData.filter((project) => project.raised === filters.raised)
  }

  if (filters.technologies && filters.technologies.length > 0) {
    filteredData = filteredData.filter((project) =>
      project.technologies.some((tech) => filters.technologies!.includes(tech.name)),
    )
  }

  // Pagination
  const page = filters.page || 1
  const limit = filters.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    total: filteredData.length,
    page,
    limit,
  }
}

export const useProjects = (filters: ProjectFilters) => {
  return useQuery({
    queryKey: ["projects", filters],
    queryFn: () => fetchProjects(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
