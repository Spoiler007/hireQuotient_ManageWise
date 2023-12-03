import React, { useState } from 'react'
import { questions } from './api'
import MyAccordian from './MyAccordian'

const Accodion = () => {

    const [data, setData] = useState(questions);
    return (
        <>
            <div className="flex  gap-32  py-40 w-[80%] mx-auto">
                <div className='flex flex-col gap-8 w-[40%] '>
                    <div className='font-outfit text-[18px] font-semibold border-[1px] border-[#EDEDFA] w-[90px] justify-center items-center px-3 flex gap-1 rounded-[8px]'><p >🙋‍♀️</p><p className='text-[#8247FF] font-outfit '>FAQ</p></div>
                    <p className='font-outfit text-6xl'>Need <span className='text-[#FE8162]'>Answer?</span></p>
                    <p className='text-[#767575] text-xl w-[90%] font-inter font-semibold'>Check out our most commonly asked questions below to find the information you need.</p>
                </div>

                <section className='flex flex-col gap-4 w-[99%]'>
                    {
                        data.map((curElem) => {
                            const { id } = curElem;
                            return <MyAccordian key={id}{...curElem} />
                        })
                    }
                </section>

            </div>
        </>
    )
}

export default Accodion;