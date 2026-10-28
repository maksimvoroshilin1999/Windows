'use client'
import React, { useState, useEffect, useRef } from 'react'
import Button from './ui/Button'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { href: '#features', label: 'Преимущества' },
  { href: '#gallery', label: 'Проекты' },
  { href: '#specs', label: 'Характеристики' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const activeSection = useActiveSection(['features', 'gallery', 'specs', 'testimonials', 'contact'])

  useEffect(() => {
    if (!isOpen) return
    const focusableElements = menuRef.current?.querySelectorAll('a, button')
    const firstElement = focusableElements?.[0] as HTMLElement
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement
    firstElement?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); buttonRef.current?.focus() }
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) { e.preventDefault(); lastElement?.focus() } 
        else if (!e.shiftKey && document.activeElement === lastElement) { e.preventDefault(); firstElement?.focus() }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-dark-bg focus:px-4 focus:py-2">
        Перейти к содержимому
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <nav className="container mx-auto flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-heading font-bold text-dark-text tracking-tight">Панорама<span className="text-accent">.</span></a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`text-sm font-medium transition-colors hover:text-dark-text relative py-2 ${activeSection === link.href.substring(1) ? 'text-dark-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' : 'text-dark-text-secondary'}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button variant="primary" className="!py-3 !px-6 text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Рассчитать стоимость</Button>
          </div>

          <button ref={buttonRef} className="lg:hidden text-dark-text p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}>
            {isOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </nav>
      </header>

      <div id="mobile-menu" ref={menuRef} className={`fixed inset-0 z-40 bg-dark-bg transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!isOpen}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-2xl font-heading text-dark-text hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
          <Button variant="primary" className="mt-8" onClick={() => { setIsOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}>Рассчитать стоимость</Button>
        </div>
      </div>
    </>
  )
}