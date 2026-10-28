'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  { icon: <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: 'Естественный свет', desc: 'Максимальная инсоляция помещений, создающая атмосферу уюта и снижающая затраты на освещение.' },
  { icon: <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>, title: 'Расширение пространства', desc: 'Визуальное стирание границ интерьера, объединение жилого пространства с ландшафтом.' },
  { icon: <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Энергоэффективность', desc: 'Инновационные стеклопакеты сохраняют тепло зимой и прохладу летом, снижая затраты на климат.' },
  { icon: <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 0m-2.828-9.9a9 9 0 0112.728 0" /></svg>, title: 'Шумоизоляция', desc: 'Многослойные стекла и герметичный профиль обеспечивают тишину даже в центре мегаполиса.' }
]

export default function Features() {
  useScrollAnimation()
  return (
    <section id="features" className="py-24 md:py-32 bg-light-bg text-light-text">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Преимущества</p>
          <h2>Новый стандарт комфорта</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="fade-in-up glass-card-light p-8 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="mb-4">{feature.title}</h3>
              <p className="text-light-text-secondary leading-relaxed max-w-prose">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}