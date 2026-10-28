'use client'
import React, { useEffect, useState } from 'react'
import Button from './ui/Button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" alt="Современный дом с панорамными окнами" className="w-full h-full object-cover" fetchPriority="high" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/50 to-dark-bg"></div>
      </div>

      <div className={`container mx-auto relative z-10 text-center text-dark-text transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="mb-6 text-balance max-w-4xl mx-auto">Архитектура света <br className="hidden md:block" /> в каждой детали</h1>
        <p className="text-xl md:text-2xl text-dark-text-secondary max-w-2xl mx-auto mb-12 font-light">Премиальные панорамные системы, стирающие границы между интерьером и природой.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Получить консультацию</Button>
          <Button variant="secondary" className="text-dark-text border-dark-text-secondary hover:border-dark-text" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Смотреть проекты</Button>
        </div>
      </div>
    </section>
  )
}