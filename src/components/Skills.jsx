import Image from 'next/image'
import SectionHeading from './ui/SectionHeading'
import figma from '/public/icons/figma.svg'
import vite from '/public/icons/vite.svg'
import javascript from '/public/icons/javascript.svg'
import css from '/public/icons/css.svg'
import html from '/public/icons/html.svg'
import nodeJs from '/public/icons/node-js.svg'
import reactJs from '/public/icons/react-js.svg'
import tailwindCSS from '/public/icons/tailwind-css.svg'
import bootstrap from '/public/icons/bootstrap.svg'
import nextjs from '/public/icons/next.js.svg'

export function SkillsItem({ langIcon, langName }) {
   return (
      <div className="flex min-w-32 flex-col items-center justify-center gap-spacing-1">
         <span>{langIcon}</span>
         <span className="text-xl font-medium text-quinary">{langName}</span>
      </div>
   )
}
function Skills() {
   return (
      <section id="skills" className="bg-primary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center text-quinary">
               Skills
            </SectionHeading>
            <div className="flex flex-wrap items-center justify-center gap-x-spacing-9 gap-y-spacing-11">
               <SkillsItem
                  langIcon={<Image src={html} alt="HTML" priority />}
                  langName="HTML"
               />
               <SkillsItem
                  langIcon={<Image src={css} alt="CSS" priority />}
                  langName="CSS"
               />
               <SkillsItem
                  langIcon={
                     <Image src={javascript} alt="Javascript" priority />
                  }
                  langName="Javascript"
               />
               <SkillsItem
                  langIcon={<Image src={reactJs} alt="React" priority />}
                  langName="React.js"
               />
               <SkillsItem
                  langIcon={<Image src={nextjs} alt="Next.js" priority />}
                  langName={'Next.js'}
               />
               <SkillsItem
                  langIcon={<Image src={nodeJs} alt="Node.js" priority />}
                  langName="Node.js"
               />
               <SkillsItem
                  langIcon={<Image src={figma} alt="Figma" priority />}
                  langName="Figma"
               />
               <SkillsItem
                  langIcon={<Image src={vite} alt="Vite.js" priority />}
                  langName="Vite.js"
               />
               <SkillsItem
                  langIcon={
                     <Image src={tailwindCSS} alt="Tailwind CSS" priority />
                  }
                  langName="Tailwind Css"
               />
               <SkillsItem
                  langIcon={<Image src={bootstrap} alt="Bootstrap" priority />}
                  langName="Bootstrap"
               />
            </div>
         </div>
      </section>
   )
}
export default Skills
