/**
 * Format file size in bytes to human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

/**
 * Validate file type against accepted types
 */
export function validateFileType(file: File, acceptedTypes: string[]): boolean {
  return acceptedTypes.some((type) => {
    if (type === "image/*") return file.type.startsWith("image/")
    if (type.endsWith("/*")) {
      const baseType = type.slice(0, -2)
      return file.type.startsWith(baseType)
    }
    return file.type === type
  })
}

/**
 * Create a preview URL for an image file
 */
export function createImagePreview(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target?.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
