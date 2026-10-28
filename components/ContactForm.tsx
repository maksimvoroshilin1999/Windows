'use client'
import React, { useState, FormEvent } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FormData { name: string; phone: string; area: string; comment: string }
interface FormErrors { name?: string; phone?: string }

export default function ContactForm() {
  useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', area: '', comment: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isNetworkError, setIsNetworkError] = useState(false)

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    if (name === 'name' && value.trim().length < 2) return 'Введите ваше имя'
    if (name === 'phone' && !/^\+7\d{10}$/.test(value.replace(/\s/g, ''))) return 'Введите корректный номер телефона'
    return undefined
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name as keyof FormData, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsNetworkError(false)
    const newErrors: FormErrors = {}
    let hasErrors = false

    if (validateField('name', formData.name)) { newErrors.name = validateField('name', formData.name); hasErrors = true }
    if (validateField('phone', formData.phone)) { newErrors.phone = validateField('phone', formData.phone); hasErrors = true }

    if (hasErrors) { setErrors(newErrors); return }

    setIsLoading(true)
    try {
      await new Promise((resolve, reject) => setTimeout(() => Math.random() > 0.1 ? resolve(true) : reject(new Error('Network error')), 1500))
      setIsSuccess(true)
      setFormData({ name: '', phone: '', area: '', comment: '' })
    } catch (error) {
      setIsNetworkError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-dark-bg text-dark-text">
        <div className="container mx-auto max-w-2xl text-center fade-in-up is-visible">
          <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="mb-4">Заявка отправлена</h2>
          <p className="text-dark-text-secondary text-lg mb-8">Мы свяжемся с вами в течение часа для обсуждения деталей.</p>
          <Button variant="secondary" className="text-dark-text border-dark-text-secondary hover:border-dark-text" onClick={() => setIsSuccess(false)}>Отправить ещё одну</Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-bg text-dark-text">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <p className="text-accent font-medium uppercase tracking-[0.15em] text-xs mb-4">Контакты</p>
            <h2 className="mb-6">Обсудим ваш проект</h2>
            <p className="text-dark-text-secondary text-lg mb-8 max-w-prose">Оставьте заявку, и наш архитектор-консультант свяжется с вами для бесплатного расчета стоимости.</p>
            <div className="space-y-4">
              <a href="tel:+74951234567" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">+7 (495) 123-45-67</a>
              <a href="mailto:info@panorama.premium" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">info@panorama.premium</a>
            </div>
          </div>

          <div className="fade-in-up">
            <form onSubmit={handleSubmit} className="glass-card-dark p-8 md:p-12 space-y-6" noValidate>
              <Input label="Ваше имя" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} error={errors.name} placeholder="Иван Иванов" disabled={isLoading} />
              <Input label="Телефон" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} placeholder="+7 999 123-45-67" disabled={isLoading} />
              <Input label="Площадь остекления (м²)" id="area" name="area" type="number" value={formData.area} onChange={handleChange} placeholder="50" disabled={isLoading} />
              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-2 font-body">Комментарий</label>
                <textarea id="comment" name="comment" rows={4} value={formData.comment} onChange={handleChange} className="w-full px-4 py-3 bg-transparent border border-dark-border text-dark-text focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent disabled:opacity-50 rounded-none font-body resize-none" placeholder="Расскажите о вашем проекте..." disabled={isLoading} />
              </div>

              {isNetworkError && <div className="p-4 bg-error/10 border border-error/20 text-error text-sm" role="alert">Не удалось отправить. Проверьте соединение и попробуйте ещё раз.</div>}

              <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>{isNetworkError ? 'Повторить' : 'Отправить заявку'}</Button>
              <p className="text-xs text-dark-text-secondary text-center">Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="underline hover:text-accent">политикой конфиденциальности</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}