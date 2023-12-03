import React from 'react'
import features1 from '../../public/features1.webp'
import features2 from '../../public/features2.webp'
import features3 from '../../public/features3.webp'
import features4 from '../../public/features4.webp'

const Features = () => {
    return (
        <div id='features' className='w-4/5 pt-[80px] m-auto flex flex-col gap-16 pb-32'>
            <div className='flex flex-col gap-10 justify-center items-center '>
                <div className='rounded-md px-4 py-2 bg-white border border-[#8247FF] text-sm font-semibold text-[#8247FF]'><p>🔥
                    PREMIER FEATURES</p></div>
                <div ><p className='font-outfit text-5xl font-bold'>Discover our product's <span className='text-[#FE8162] '>Capabilities</span></p></div>
                <div><p className='text-xl font-semibold text-[#767575] text-center w-4/5 m-auto '>Don't settle for mediocrity - embrace the future of management with Manage Wise.</p></div>
            </div>
            <div className='flex mt-14 justify-center gap-10 items-center '>

                <div className='border-2 border-none bg-[#EDEDFA] pt-16 pl-5 py-10 w-3/4  rounded-[20px] '>
                    <div className='border-transparent border-2 mb-5 w-11 h-11 bg-white rounded-2xl items-center flex '>
                        <p className='text-3xl '>⭐️</p>
                    </div>
                    <p className='text-[42px] font-bold font-outfit w-5/6 '>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</p>
                </div>

                <div className='border-2 border-[#EDEDFA] py-10 rounded-[20px]'>
                    <img src={features1} alt='' />
                    <div className='px-5 gap-3 flex flex-col'>
                        <p className='font-outfit font-semibold  text-[25px]'>Smart Task Management</p>
                        <p className=' text-[#767575] font-semibold'>Say goodbye to chaos with our smart task management system</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-flow-col gap-10 '>

                <div className='border-[1px] border-[#EDEDFA] rounded-[30px]'>
                    <div><img src={features2} alt='' /></div>

                    <div className='px-8 py-5'>
                        <p className='text-2xl font-outfit text-[25px] font-semibold'>Flexible Scheduling</p>
                        <p className=' text-[#767575]  mt-4 font-semibold'>
                            Stay productive with our flexible scheduling system</p>
                    </div>
                </div>
                <div className='border-2 border-[#EDEDFA] rounded-[30px]'>
                    <div><img src={features3} alt='' className='h-[300px] max-h-full ' /></div>

                    <div className='px-8 py-5'>
                        <p className='text-2xl font-outfit text-[25px] font-semibold'>Easy Communication</p>
                        <p className=' text-[#767575]  mt-4 font-semibold'>Collaborate seamlessly with your team in real-time</p>
                    </div>
                </div>
                <div className='border-2 border-[#EDEDFA] rounded-[30px]'>
                    <div><img src={features4} alt='' /></div>

                    <div className='px-8 py-5'>
                        <p className='text-2xl font-outfit text-[25px] font-semibold'>Analytics</p>
                        <p className=' text-[#767575]  mt-4 font-semibold'>Gain valuable insights with our advanced analytics feature+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;