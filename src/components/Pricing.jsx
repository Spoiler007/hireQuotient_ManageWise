import React from 'react'
import { IoMdCheckmark } from "react-icons/io";



const Pricing = () => {
    return (
        <div className='flex flex-col gap-14'>

            <div className='flex flex-col justify-center text-center gap-5'>
                <p className='text-[#8247FF] font-outfit text-xs border-[1px] border-[#8247ff33] rounded-lg w-20 py-1 mx-auto'>💲 PRICING</p>
                <p className='font-outfit text-5xl'>Select your ideal<span className='text-[#FE8162] '> Pricing</span> plan</p>
                <p className='text-[#767575] font-inter w-[28%] mx-auto text-md font-semibold'>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
            </div>



            <div className='flex justify-around w-[85%] mx-auto'>

                <div className=' px-8 pr-24 py-8 rounded-3xl bg-[#EDEDFA] flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-[#FE8162] font-outfit border-2  w-16 rounded-[10px] text-center bg-white'>FREE</p>

                        <div className='flex items-center gap-2'>
                            <p className='text-5xl'>$0</p>
                            <p className='mt-4'>/month</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold  items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Access to all basic features</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Reporting and analytics</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Up to 5 individual users</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Chat and email support</p>
                    </div>


                    <div className='border-none w-32 py-2 px-4 mt-6  bg-white rounded-lg '>
                        <button className=' text-black mx-auto flex font-outfit font-semibold '>Get started</button>
                    </div>

                </div>



                <div className=' px-8 pr-24 py-8  rounded-3xl bg-black flex flex-col gap-10'>
                    <div className='flex flex-col gap-5 '>
                        <p className='text-[#FE8162] font-outfit border-2  w-24 rounded-[10px] text-center bg-white'>STANDARD</p>

                        <div className='flex items-center gap-2'>
                            <p className='text-5xl text-white'>$25</p>
                            <p className='mt-4 text-white'>/month</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold  items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Access to all basic features</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Reporting and analytics</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Up to 5 individual users</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Chat and email support</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />3+ integrations</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Account performance reporting</p>
                    </div>


                    <div className='border-none w-32 py-2 px-4 mt-6  bg-[#8247FF] rounded-lg '>
                        <button className=' text-white mx-auto flex font-outfit font-semibold '>Get started</button>
                    </div>

                </div>



                <div className=' px-8 pr-24 py-8 rounded-3xl bg-[#EDEDFA] flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-[#FE8162] font-outfit border-2  w-24 rounded-[10px] text-center bg-white'>BUSINESS</p>

                        <div className='flex items-center gap-2'>
                            <p className='text-5xl'>$42</p>
                            <p className='mt-4'>/month</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold  items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Access to all basic features</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Reporting and analytics</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Up to 5 individual users</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />Chat and email support</p>
                        <p className='flex gap-2 text-center text-md font-inter font-semibold items-center text-[#767575]'><IoMdCheckmark className='text-green-600 text-xl' />3+ integrations</p>
                    </div>


                    <div className='border-none w-32 py-2 px-4 mt-6  bg-white rounded-lg '>
                        <button className=' text-black mx-auto flex font-outfit font-semibold '>Get started</button>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default Pricing;