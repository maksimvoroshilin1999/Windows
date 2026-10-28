import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  id: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, id, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium mb-2 font-body">{label}</label>
      <input
        id={id}
        ref={ref}
        className={`
          w-full h-14 px-4 bg-transparent border transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
          disabled:opacity-50 disabled:cursor-not-allowed rounded-none font-body
          ${error ? 'border-error text-error focus:border-error focus:ring-error/20' : 'border-light-border dark:border-dark-border text-light-text dark:text-dark-text'}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-error" role="alert">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input'
export default Input