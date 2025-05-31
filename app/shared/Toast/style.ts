import { ToastPosition, ToastType } from './types'

export const getToastStyles = (type: ToastType) => {
  const baseStyles = 'rounded-lg p-4 shadow-lg flex items-start w-full max-w-xs'

  const typeStyles: Record<ToastType, string> = {
    success: 'bg-green-50 text-green-800 border border-green-200',
    error: 'bg-red-50 text-red-800 border border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border border-blue-200',
    default: 'bg-gray-50 text-gray-800 border border-gray-200',
  }

  return `${baseStyles} ${typeStyles[type]}`
}

export const getIconStyles = (type: ToastType) => {
  const iconStyles: Record<ToastType, string> = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400',
    default: 'text-gray-400',
  }

  return iconStyles[type]
}

export const getPositionStyles = (position: ToastPosition) => {
  const positionStyles: Record<ToastPosition, string> = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  }

  return positionStyles[position]
}