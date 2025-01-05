import React from 'react'
import SectionHeading from '../../ui/SectionHeading'
import WorkCard from '../../ui/WorkCard'
import { projectsData } from '@/constants/projectsData'

function Work() {
   const projectsData_2 = projectsData.map((project, index) => (
      <WorkCard
         className="mx-auto"
         key={index}
         imageSrc={project.imageSrc}
         projectName={project.title}
         description={project.description}
         previewIcons={project.previewIcons}
      />
   ))

   return (
      <section id="work" className="bg-quaternary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">My Work</SectionHeading>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-x-spacing-10 gap-y-spacing-10">
               {projectsData_2}
            </div>
         </div>
      </section>
   )
}

export default Work
