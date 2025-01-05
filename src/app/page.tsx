import About from '@/components/pages/home/About'
import Contact from '@/components/pages/home/Contact'
import Experience from '@/components/pages/home/Experience'
import Hero from '@/components/pages/home/Hero'
import Work from '@/components/pages/home/Work'

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <Experience />
         <Work />
         <Contact />
      </main>
   )
}
