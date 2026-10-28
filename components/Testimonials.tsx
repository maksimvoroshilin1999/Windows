'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  { name: 'Александр В.', project: 'Вилла в Подмосковье', text: 'Результат превзошел все ожидания. Окна стали главным арт-объектом в доме, а виды открываются потрясающие.' },
  { name: 'Елена М.', project: 'Пентхаус, Москва-Сити', text: 'Профессиональный подход на каждом этапе. Шумоизоляция идеальная, несмотря на центр города.' },
  { name: 'Дмитрий К.', project: 'Загородная резиденция', text: 'Энергоэффективность действительно работает. Зимой дом сохраняет тепло, а летом не перегревается.' },
]

export default function Testimonials() {
  useScrollAnimation()
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-light-bg text-light-text">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Отзывы</p>
          <h2>Нам доверяют</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, idx) => (
            <div key={idx} className="fade-in-up glass-card-light p-8">
              <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-light-text mb-6 leading-relaxed max-w-prose">{t.text}</p>
              <div>
                <p className="font-heading font-bold text-lg">{t.name}</p>
                <p className="text-sm text-light-text-secondary">{t.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24 fade-in-up">
          <div><p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">150+</p><p className="text-light-text-secondary">Реализовано объектов</p></div>
          <div><p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">10 лет</p><p className="text-light-text-secondary">Гарантия на конструкции</p></div>
          <div><p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">24/7</p><p className="text-light-text-secondary">Сервисная поддержка</p></div>
        </div>
      </div>
    </section>
  )
}