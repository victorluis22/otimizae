import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './global/Header'
import Navigation from './global/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Otimizae',
  description: 'Bem-vindo ao Otimizae - o seu destino definitivo para todas as suas necessidades de otimização algorítmica! Se você está em busca de ferramentas poderosas para resolver problemas de otimização, você veio ao lugar certo. Nossa missão é simplificar o processo de otimização, tornando-o acessível a todos. Com uma vasta coleção de calculadoras de algoritmos de otimização à sua disposição, Otimizae está aqui para ajudar você a encontrar as soluções mais eficazes para uma ampla gama de desafios complexos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <div className='flex justify-center flex-1'>
          <div className="flex w-full flex-1 max-w-7xl flex-col sm:flex-row">
            <Navigation />
            <main className="flex flex-col py-10 px-5 h-full w-full sm:w-3/4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
