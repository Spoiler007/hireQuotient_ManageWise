import React, { useRef } from 'react'
import { MdPlayCircle } from "react-icons/md";
import hero from '../../public/hero.webp';
import { calcLength, motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0.3 1",null]
  });
  const dRotate = useScroll({
    target: imageRef,
    offset: ["0.3 1","1 1"]
  }).scrollYProgress;
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1.09])
  const rotateProgress = useTransform(dRotate, [0, 1], [-20, 0])
  console.log(scaleProgress);
  return (
    <>
      <div className='hero from-[#fdf2ec] bg-gradient-to-b to-white pt-14'>

        <div className='flex flex-col items-center justify-center space-y-5 p-5 w-3/4 mx-auto overflow-hidden'>
          <motion.div initial={{
            top: 50
          }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            animate={{
              top: [null, -8, 0],
            }} className='relative rounded-md px-4 py-2 bg-white border text-sm text-[#8247FF]'><p>👋WELCOME TO MANAGE WISE!</p></motion.div>
          <motion.div initial={{
            top: 50,
            opacity: 0
          }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            animate={{
              top: [null, -8, 0],
              opacity: 1
            }} className='relative'>
            <p className='text-7xl font-outfit text-center font-bold'>Empower your business with <span className='text-[#FE8162] '>Strategic</span> insights</p>
          </motion.div>
          <motion.p initial={{
            top: 50,
            opacity: 0
          }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.2 }}
            animate={{
              opacity: 1,
              top: [null, -8, 0]
            }} className='relative text-[#767575] text-2xl font-inter text-center font-semibold'>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</motion.p>
          <motion.div initial={{
            top: 50
          }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            animate={{
              top: [null, -8, 0]
            }} className='relative gap-10 flex'>
            <button className='bg-[#8247ff]  py-3 px-8 text-white font-outfit rounded-xl text-xl'>Get Started</button>
            <button className='bg-white  py-3 px-8  font-outfit flex items-center gap-2 rounded-xl text-xl font-semibold'>Watch Demo <MdPlayCircle /></button>
          </motion.div>
        </div>
        <div className='pt-16 pb-20'>
          <motion.img
            ref={imageRef}
            initial={{
              transformPerspective: 1200
            }}
            style={{ scale: scaleProgress, rotateX: rotateProgress }}
            // viewport={{once:true}}
            className='rounded-[27px] shadow-2xl mx-auto w-[80%]' src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg" alt="Graph" srcset="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg 5768w" sizes="min(90vw, 1200px)" />
        </div>

      </div>
    </>
  )
}

export default Hero;