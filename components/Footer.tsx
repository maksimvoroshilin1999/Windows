import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark-bg text-dark-text-secondary py-16 border-t border-dark-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-heading font-bold text-dark-text tracking-tight mb-4 block">Панорама<span className="text-accent">.</span></a>
            <p className="max-w-sm leading-relaxed">Архитектурное остекление премиум-класса. Создаем пространство, наполненное светом.</p>
          </div>
          <div>
            <h4 className="text-dark-text font-heading font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-accent transition-colors">Преимущества</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Проекты</a></li>
              <li><a href="#specs" className="hover:text-accent transition-colors">Характеристики</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-dark-text font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="tel:+74951234567" className="hover:text-accent transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@panorama.premium" className="hover:text-accent transition-colors">info@panorama.premium</a></li>
              <li>Москва, Пресненская наб., 12</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {year} Панорама Премиум. Все права защищены.</p>
          <a href="/privacy" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}