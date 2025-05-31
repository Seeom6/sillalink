"use client"
import React, { useEffect } from 'react'
import { Toast as ToastType } from './types'
import { getToastStyles, getIconStyles } from './style'
// Importing from react-icons
import { FaTimes } from 'react-icons/fa' // Close icon from Font Awesome
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle
} from 'react-icons/fa' // Various icons from Font Awesome

interface ToastProps extends ToastType {
  onRemove: (id: string) => void
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = 'default',
  duration = 3000,
  position = 'top-right',
  onRemove,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onRemove])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className={`w-5 h-5 ${getIconStyles(type)}`} />
      case 'error':
        return <FaExclamationCircle className={`w-5 h-5 ${getIconStyles(type)}`} />
      case 'warning':
        return <FaExclamationTriangle className={`w-5 h-5 ${getIconStyles(type)}`} />
      case 'info':
        return <FaInfoCircle className={`w-5 h-5 ${getIconStyles(type)}`} />
      default:
        return <FaInfoCircle className={`w-5 h-5 ${getIconStyles(type)}`} />
    }
  }

  return (
    <div
      className={`${getToastStyles(type)} animate-fadeIn`}
      role="alert"
    >
      <div className="flex-shrink-0 mr-3">
        {getIcon()}
      </div>
      <div className="flex-1 pt-0.5">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="ml-4 -mr-2 p-1.5 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      >
        <span className="sr-only">Close</span>
        <FaTimes className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Toast