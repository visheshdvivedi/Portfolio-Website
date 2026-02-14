import React, { type ReactNode } from 'react'
import type { IconType } from 'react-icons'

type Technology = {
    icon: IconType
}

type Experience = {
    id: number,
    title: string,
    startDate: Date,
    endDate: Date,
    company: string,
    description: string[],
    technologies: Technology[]
}

const ExperienceTimeline = ({ experience }: { experience: Experience[] }) => {

    const dateToString = (date: Date) => {
        return date.toLocaleString('en-US', { year: 'numeric', month: 'long' });
    }

    return (

        <ol className="relative border-s border-primary dark:border-gray-700">
            {experience.map(exp => 
                <li key={exp.id} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ dateToString(exp.startDate) } - { dateToString(exp.endDate) }</time>
                    <h3 className="text-lg font-semibold text-primary mb-2">{ exp.title } | { exp.company }</h3>
                    <ul className="mb-4 text-sm list-disc px-6 font-normal text-gray-500 dark:text-gray-400">
                        { exp.description.map(desc => ( <li key={desc}>{ desc }</li> )) }
                    </ul>
                    <section className='px-6 flex flex-row justify-start items-center gap-5'>
                        { exp.technologies.map((tech, index) => (
                            <div key={index} className='text-primary'>{tech.icon}</div>
                        )) }
                    </section>
                </li>
            )}
        </ol>
    )
}

export default ExperienceTimeline