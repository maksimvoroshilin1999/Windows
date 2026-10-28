import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Панорама Премиум — Архитектурное остекление',
  description: 'Премиальные панорамные окна. Максимум света, безупречная эстетика и передовые технологии энергоэффективности.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}