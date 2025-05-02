import React from 'react'
import Image from "next/image";
import profile from './profile.jpg'

const About = () => {
    return (
        <div className='border border-neutral-900 pb-16 lg:mb-32'>
            <div className='flex flex-wrap items-center'>
                {/* Text Section */}
                <div className='w-full lg:w-1/2 px-6 lg:px-12'>
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h1 className='pb-6 text-5xl lg:text-7xl font-semibold tracking-tight lg:mt-16'>
                            Gurlal Singh
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl lg:text-5xl font-medium tracking-tight mb-4'>
                            AI Engineer
                        </span>
                        <p className='max-w-xl text-base lg:text-lg font-light tracking-tight leading-relaxed'>
                            I am an AI engineer with a strong foundation in building intelligent systems and applying machine learning techniques to solve complex problems. I am proficient in working with cutting-edge AI models and frameworks, and I also have experience with Next.js for building modern, performant web applications. Currently, I am enhancing my technical skills by learning data structures and algorithms (DSA), further strengthening my problem-solving abilities and deepening my understanding of computational efficiency.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className='w-full lg:w-1/2 px-6 lg:px-12 mt-10 lg:mt-0'>
                    <div className='flex justify-center lg:justify-end'>
                        <Image
                            src={profile}
                            width={400}
                            height={400}
                            className='rounded-2xl shadow-md'
                            alt='Gurlal Singh Profile'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
