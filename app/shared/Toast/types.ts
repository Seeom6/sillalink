export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default'

export interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
  position?: ToastPosition
}

export interface ToastOptions {
  type?: ToastType
  duration?: number
  position?: ToastPosition
}