'use client'
import React, { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  { q: 'Сколько стоят панорамные окна?', a: 'Стоимость рассчитывается индивидуально и зависит от площади, типа профиля, формулы стеклопакета и сложности монтажа. Оставьте заявку для точного расчета.' },
  { q: 'Какие сроки изготовления и монтажа?', a: 'Производство занимает от 3 до 6 недель в зависимости от сложности проекта. Монтаж на стандартном объекте длится 2-5 дней.' },
  { q: 'Требуется ли специальное обслуживание?', a: 'Наши системы требуют минимального ухода: периодическая смазка фурнитуры и очистка дренажных каналов. Мы предлагаем годовые контракты на сервисное обслуживание.' },
  { q: 'Насколько это безопасно?', a: 'Мы используем закаленное стекло или триплекс, которые при разрушении не образуют острых осколков. Профиль оснащается противовзломной фурнитурой.' },
  { q: 'Чем отличается от обычного остекления?', a: 'Панорамные системы имеют усиленный профиль, способный выдержать вес массивных стеклопакетов, и обеспечивают максимальную светопропускную способность при сохранении высоких показателей теплоизоляции.' },
]

export default function FAQ() {
  useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-light-bg text-light-text">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">FAQ</p>
          <h2>Частые вопросы</h2>
        </div>
        
        <div className="space-y-4 fade-in-up">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-light-border">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg md:text-xl font-heading font-medium pr-8">{faq.q}</span>
                <svg className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id={`faq-panel-${idx}`} className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} role="region">
                <div className="overflow-hidden">
                  <p className="pb-6 text-light-text-secondary leading-relaxed max-w-prose">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}