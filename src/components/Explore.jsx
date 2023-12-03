import React from 'react'
import { CiMobile2 } from "react-icons/ci";
import { HiBell } from "react-icons/hi";
import { HiFire } from "react-icons/hi";


const Explore = () => {
    return (
        <div className=' pt-[120px] bg-black'>

            <div className='w-[80%] mx-auto '>
                <div className='flex border-black bg-white w-40 p-1 rounded-[10px] items-center  border-2 gap-2'>🤩 <p className='text-[#8247FF] font-outfit font-semibold text-xm'> AND MORE...</p></div>
                <div><p className='text-[#FDF2EC] text-[56px] font-bold'>Explore an array of features that elevate your <span className='text-[#FE8162]'>Productivity</span> to new heights</p></div>
                <div><p className='text-[#767575] text-xl font-semibold w-[42%] mt-3'>Discover the tools that will revolutionize the way you manage and optimize your operations</p></div>
            </div>





            <div  className='w-[80%] mx-auto grid grid-cols-3 gap-[50px] mt-[70px]'>
                <div className='bg-[#212121]  flex flex-col justify-center items-center text-center rounded-[20px] gap-3 py-[40px] px-[20px]'>
                <p className='text-4xl  p-[15px] mx-auto bg-[#8247FF] w-18 rounded-3xl flex text-white'><CiMobile2 className='m-auto'/></p>
                <p className='font-outfit w-[80%] text-[#FDF2EC] text-[25px] font-semibold'>Cross-Platform Compatibility</p>
                <p className='text-[#767575] w-[80%] font-semibold'>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                </div>

                <div className='bg-[#212121] flex flex-col justify-center items-center text-center rounded-[20px] gap-5 py-[40px] '>
                <p className='text-4xl p-[15px] mx-auto bg-[#8247FF] w-18 rounded-3xl flex text-white'><HiBell className='m-auto '/></p>
                <p className='font-outfit w-[85%] text-[#FDF2EC] text-[25px] font-semibold'>Stay Informed with Essential Notifications</p>
                <p className='text-[#767575] w-[80%] font-semibold'>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
                </div>


                <div className='bg-[#212121] flex flex-col justify-center items-center text-center rounded-[20px] gap-5 py-[40px] '>
                <p className='text-4xl p-[15px] mx-auto bg-[#8247FF] w-18 rounded-3xl flex text-white'><HiFire /></p>
                <p className='font-outfit w-[85%] text-[#FDF2EC] text-[25px] font-semibold'>Secure Data Encryption at all times</p>
                <p className='text-[#767575] w-[80%] font-semibold'>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                </div>
            </div>

        </div>
    )
}

export default Explore;