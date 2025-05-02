import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiKaggle } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNextjsFill className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTensorflow className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandCpp className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiKeras className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiKaggle className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiScikitlearn className='text-7xl text-cyan-400'/>
            </div>
            

            </div>
    </div>
  )
}

export default Technologies
