'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000', alt: 'Вилла в сосновом бору', span: 'col-span-1 md:col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000', alt: 'Пентхаус с видом на город', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000', alt: 'Загородный дом у озера', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000', alt: 'Минималистичная гостиная', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000', alt: 'Современный фасад', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000', alt: 'Зимний сад', span: 'col-span-1 row-span-1' },
]

export default function Gallery() {
  useScrollAnimation()
  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark-bg text-dark-text">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Портфолио</p>
          <h2>Реализованные проекты</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {projects.map((project, idx) => (
            <div key={idx} className={`fade-in-up relative group overflow-hidden ${project.span}`}>
              <img src={project.src} alt={project.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-lg font-heading">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}