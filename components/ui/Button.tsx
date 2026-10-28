import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
  children: React.ReactNode
}

export default function Button({ variant = 'primary', isLoading = false, children, className = '', disabled, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-10 py-4 text-base font-body font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
  
  const variants = {
    primary: "bg-accent text-dark-bg hover:bg-accent-hover hover:-translate-y-0.5 active:scale-[0.98] active:bg-accent-active",
    secondary: "border border-current text-current hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "text-current hover:bg-black/5 dark:hover:bg-white/5"
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Отправка...
        </>
      ) : children}
    </button>
  )
}