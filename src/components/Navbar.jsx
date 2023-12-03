import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence, easeInOut } from "framer-motion"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menus = [{
        name: "Features",
        link: "#features"
    },
    {
        name: "FAQ",
        link: "#FAQ"
    },
    {
        name: "Pricing",
        link: "#pricing"
    },
    {
        name: "Testimonials",
        link: "#testimonials"
    },
    ]

    const handleNavbarOpen = () => {
        setNavbarOpen(true)
    }
    const handleNavbarClose = () => {
        setNavbarOpen(false)
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {navbarOpen ?
                    <motion.div className="flex flex-col w-full py-4 px-6 h-screen overflow-hidden"
                        key={"open"}
                        initial={{ height:"auto" }}
                        animate={{ height: "100vh" }}
                        exit={{ height:'auto' }}
                        transition={{
                            ease:"linear"
                        }}
                    >
                        <div className="flex items-center justify-between ">
                            <div className="logo flex items-center justify-center font-bold text-lg font-[sans-serif]"><img src="/logo.webp" alt="logo" height={50} width={50} className="mr-2" /> <span className="md:inline">ManageWise</span></div>
                            <div className="md:hidden text-3xl cursor-pointer" onClick={handleNavbarClose}><FiX /></div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 pt-8">
                            {
                                menus.map((menu) => {
                                    return <div key={menu.name}>{menu.name}</div>
                                })
                            }
                            <div className="bg-[#8247ff] w-full text-center text-white rounded-xl px-5 py-4 mt-6 font-outfit border border-transparent hover:border hover:border-black">Buy Template</div>
                        </div>
                    </motion.div>
                    :
                    <motion.div className="bg-[#fdf2ec] flex items-center justify-between py-4 px-6" key={"close"}
                    >
                        <div className="logo flex items-center justify-center font-bold text-lg font-[sans-serif]"><img src="/logo.webp" alt="logo" height={50} width={50} className="mr-2" /> <span className="md:inline">ManageWise</span></div>
                        <div className="gap-8  items-center hidden md:flex">
                            {
                                menus.map((menu) => {
                                    return <div key={menu.name} className="flex items-center gap-6 mr-10 cursor-pointer hover:text-blue-400 duration-300 ease-in-out transition-all"><div className="h-1 w-1 bg-gray-300"></div>{menu.name}</div>
                                })
                            }
                            <div className="bg-white rounded-xl px-5 py-2 font-bold font-outfit border border-transparent hover:border hover:border-black">Buy Template</div>
                        </div>
                        <div className="md:hidden text-3xl cursor-pointer" onClick={handleNavbarOpen}><FiMenu /></div>
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Navbar