import React from 'react'
import Toast from './Toast'
import { Toast as ToastType, ToastPosition } from './types'
import { getPositionStyles } from './style'

interface ToastContainerProps {
  toasts: ToastType[]
  position?: ToastPosition
  removeToast: (id: string) => void
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = 'top-right',
  removeToast,
}) => {
  return (
    <div
      className={`fixed z-50 space-y-3 ${getPositionStyles(position)}`}
      aria-live="assertive"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onRemove={removeToast}
        />
      ))}
    </div>
  )
}

export default ToastContainer