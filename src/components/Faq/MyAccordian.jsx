import React, { useState } from 'react'


const MyAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>
        <div className='w-[90%] h-auto float-right flex flex-col border-none  bg-[#F7F8FD] px-7 py-5 rounded-[30px]  transition-all  duration-2000 border-2 border-gray-600 ease-in-out'>
            <div className='flex items-center' onClick={() => setShow(!show)}>
                <h3 className='text-2xl font-outfit font-semibold  text-[#8247FF] w-[99%]'>{question}</h3>
                <h2 className='float-right items-center text-4xl text-[#8247FF] '>{show ? "×" : "+"}</h2>
                </div>
                
                {show && <p className='text-[16px] font-inter mt-4 font-semibold text-[#767575]'>{answer}</p>}
            </div>
        </>
    )
}

export default MyAccordian;