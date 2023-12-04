import React from 'react'
import integration from '../../public/integration.webp'
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";


const Integration = () => {
  return (
    <div className='bg-black pt-20 border-t-[1px] border-[#f7f6f5]'>

    <div className='w-[50%] mx-auto flex flex-col  items-center text-center gap-6'>
<div>

    <p className='text-[#8247FF] flex gap-2 items-center font-inter text-sm border px-6 py-1 rounded-lg bg-white font-semibold'><HiOutlineWrenchScrewdriver className='text-lg'/> INTEGRATIONS</p>
    </div>
    <p className='font-outfit text-5xl w-[70%] text-[#FDF2EC]'>Enable <span className='text-[#FE8162]'> integration</span> with other popular tools and platforms</p>
    <p className='text-[#767575] text-md font-semibold w-[48%] font-inter'>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</p>
    <img src={integration} alt='' className='w-[500px] mt-8'/>
    </div>
    
    </div>
  )
}

export default Integration;