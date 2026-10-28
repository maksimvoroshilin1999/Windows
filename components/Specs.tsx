'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const specs = [
  { value: '54', unit: 'мм', label: 'Толщина стеклопакета' },
  { value: '0.5', unit: 'Вт/м²·К', label: 'Коэффициент теплопередачи' },
  { value: '42', unit: 'дБ', label: 'Звукоизоляция' },
  { value: 'Алюм.', unit: 'Профиль', label: 'Теплый алюминиевый профиль' },
]

export default function Specs() {
  useScrollAnimation()
  return (
    <section id="specs" className="py-24 md:py-32 bg-light-bg-alt text-light-text">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1000" alt="Сечение алюминиевого профиля панорамного окна" className="w-full h-auto object-cover aspect-[4/5]" loading="lazy" />
          </div>
          <div className="fade-in-up">
            <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Технологии</p>
            <h2 className="mb-12">Инженерное совершенство</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-light-text">{spec.value}</span>
                    <span className="text-sm text-light-text-secondary">{spec.unit}</span>
                  </div>
                  <p className="text-light-text-secondary">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}