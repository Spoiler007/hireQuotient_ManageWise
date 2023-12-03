import React from 'react'
import Marquee from "react-fast-marquee";
import prof1 from '../../public/prof1.webp'
import prof2 from '../../public/prof2.webp'
import prof3 from '../../public/prof3.webp'
import prof4 from '../../public/prof4.webp'


const Testimonial = () => {
    return (
        <div className=''>
            <div className='w-[80%] mx-auto flex flex-col gap-5 mt-40'> 
            <p className='text-[#8247FF] font-outfit text-xs border-[1px] border-[#8247ff33] rounded-lg w-28 py-1 flex '><span>🧡</span> TESTIMONIALS</p>
            
            <p className='font-outfit font-bold text-6xl'>Hear from our<span className='text-[#FE8162] '> Satisfied</span> clients</p>
            <p className='text-[#767575] font-inter w-[50%]  text-xl font-semibold'>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p>
            
            </div>


            <Marquee  direction='right'>
                <div className=" flex w-[1700px] ml-10 gap-10 mt-20">

                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold   w-[80%]'> "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity."

                        </p>

                        <div className='flex items-center gap-3'>
                            <img src={prof1} alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>David</p>
                                <p className='text-[#767575] font-semibold'> Freelancer</p>
                            </div>
                        </div>
                    </div>

                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]'> "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks. "</p>

                        <div className='flex items-center gap-3'>
                            <img src={prof2} alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>  Alex</p>
                                <p className='text-[#767575] font-semibold'>  IT Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold w-[90%]'> "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
                        </p>

                        <div className='flex items-center gap-3'>
                            <img src={prof3} alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>Emily</p>
                                <p className='text-[#767575] font-semibold'> Art Director</p>
                            </div>
                        </div>
                    </div>

                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]'> "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.
                        </p>

                        <div className='flex items-center gap-3'>
                            <img src={prof4} alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'> Sarah</p>
                                <p className='text-[#767575] font-semibold'>Project Manager</p>
                            </div>
                        </div>
                    </div>



                </div>
            </Marquee>
        </div>
    )
}

export default Testimonial;