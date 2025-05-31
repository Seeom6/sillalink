"use client"
import React, { useState, useCallback } from 'react'
import ToastContainer from './ToastContainer'
import { Toast, ToastOptions } from './types'

interface ToastContextType {
  addToast: (message: string, options?: ToastOptions) => void
  removeToast: (id: string) => void
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(
    (message: string, options: ToastOptions = {}) => {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: Toast = {
        id,
        message,
        type: options.type || 'default',
        duration: options.duration || 3000,
        position: options.position || 'top-right',
      }

      setToasts((prevToasts) => [...prevToasts, newToast])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts.length > 0 && (
        <ToastContainer
          toasts={toasts}
          removeToast={removeToast}
        />
      )}
    </ToastContext.Provider>
  )
}