import React from 'react'
import { PROJECTS } from './info.js'
import Link from 'next/link.js'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                Projects
            </h1>
            <div>
                {PROJECTS.map((projects, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{projects.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{projects.heading} - {" "}  </h6><Link href={projects.link}><p className='text-neutral-400 mb-4 mt-4'>{projects.link}</p></Link>
                            <p className='text-neutral-400 mb-4'>{projects.description}</p>
                            {projects.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects
