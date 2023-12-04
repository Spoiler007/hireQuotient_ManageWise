import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";



const Footer = () => {
    return (

        <div className='bg-[#FDF2EC]'>
            <div className='pt-16 pb-12  flex flex-col gap-16'>

                <div className='flex flex-col text-center items-center justify-center md:text-left md:flex-row md:justify-between md:w-11/12 m-auto'>
                    <div className="flex items-center font-bold text-lg font-[sans-serif]">
                        <img src="/logo.webp" alt="logo" height={45} width={45} className="mr-2" />
                        <span className="md:inline">ManageWise</span>
                    </div>
                    <div className='flex flex-col mt-14 gap-3'>
                        <a href='#features'>Features</a>
                        <a href='#faq'>FAQ</a>
                        <a href='#pricing'>Pricing</a>
                        <a href='#testimonials'>Testimonials</a>
                    </div>
                </div>

                <div className='border-t-2 md:w-11/12 m-auto flex flex-col md:flex-row gap-4 items-center pt-6 md:justify-between border-[#e1dcdc]'>
                    <div className='flex items-center gap-2'>
                        <LiaCopyrightSolid /> 2022 ManageWise, Inc.</div>
                    <div className='flex gap-2 text-2xl'>
                        <PiInstagramLogoFill />
                        <FaSquareXTwitter />
                        <RiLinkedinFill />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;