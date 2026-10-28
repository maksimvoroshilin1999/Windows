'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  { num: '01', title: 'Консультация', desc: 'Обсуждаем ваши пожелания, архитектурные особенности и бюджет.' },
  { num: '02', title: 'Замер и проект', desc: 'Инженер выезжает на объект. Создаем 3D-визуализацию и чертежи.' },
  { num: '03', title: 'Производство', desc: 'Изготавливаем конструкции на собственном заводе с контролем качества.' },
  { num: '04', title: 'Монтаж', desc: 'Профессиональная установка и пусконаладка с уборкой после работ.' },
]

export default function Process() {
  useScrollAnimation()
  return (
    <section id="process" className="py-24 md:py-32 bg-light-bg-alt text-light-text">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Этапы</p>
          <h2>Процесс работы</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-light-border -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="fade-in-up relative text-center md:text-left">
                <div className="w-24 h-24 bg-light-bg-alt border-2 border-accent rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 relative z-10">
                  <span className="text-3xl font-heading font-bold text-accent">{step.num}</span>
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-light-text-secondary max-w-xs mx-auto md:mx-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}