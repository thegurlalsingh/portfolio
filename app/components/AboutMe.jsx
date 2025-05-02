import React from 'react'
import Image from 'next/image'
import profile from './profile2.jpg'

const AboutMe = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h2>
            <div className='flex flex-wrap lg:gap-x-6'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={profile}
                            width={400}
                            height={300}
                            className='rounded-2xl'
                            alt='Profile image'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 text-xl leading-relaxed'>
                            I am a dedicated Full Stack Developer with a strong focus on mastering Next.js, currently in my second year at Bennett University. My academic journey is complemented by hands-on experience in developing dynamic and scalable web applications. I am actively deepening my knowledge in Data Structures and Algorithms (DSA) and Artificial Intelligence (AI), aiming to integrate these skills into creating innovative and efficient solutions. Balancing rigorous academic work with my passion for web development, I am committed to continuous learning and excellence in the tech world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
