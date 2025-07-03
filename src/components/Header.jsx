import { motion } from "framer-motion"
import { useState } from "react";
import { FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
    //toggle menu state
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="absolute w-full z-50 transition-all duration-300">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

            {/* Logo or Title */}
            <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
                duration: 1.2,
             }}
            className="flex items-center">

              { /* <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-yellow-400 to yellow-100 flex items-center justify-center text-blue-700 font-bold italic text-xl mr-3">
                    CT
                </div> */} 

                <span className="sm:hidden text-xl font-bold bg-gradient-to-r from-zinc-500 to-zinc-100 text-transparent bg-clip-text italic">
                    Cuatro Torres
                </span>
            </motion.div>

            {/* Navigation Links */}

             <nav className="lg:flex hidden space-x-8">
                {["Inicio", "Servicios", "Contacto"].map((item, index) => (
                    <motion.a href="#"
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.7 + index * 0.2,
                        duration: 1.2,
                    }}
                    className=" relative text-blue-800 dark:text-blue-400 hover:yellow-600  dark:hover:yellow-400 transition-colors
                    font-medium text-lg duration-300 group"
                    >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                ))}
             </nav>

             {/*social icons */}

             <div className="md:flex hidden items-center space-x-4">

                <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="text-blue-800 dark:text-blue-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300" href="https://www.instagram.com/cuatrotorres">
                    <FaInstagram className="w-8 h-8"/>
                </motion.a>
                
                <motion.a 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="text-blue-800 dark:text-blue-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300" href="#">
                    <FaWhatsapp className="w-8 h-8"/>
                </motion.a>

                  {/* contacto */}

                <motion.button
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,

                }}
                 className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-200 text-blue-700 font-bold italic hover:from-blue-700 hover:to-blue-500 hover:text-yellow-400 transition-colors duration-300">
                    Contactanos
                </motion.button>
             </div>
          
            {/* mobile menu button*/}
            <div className="md:hidden flex items-center">
                <motion.button 
                whileTap={{scale: 0.7}}
                onClick={toggleMenu}
                className="text-zinc-100 dark:text-white   hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </motion.button>
            </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
        initial={{opacity: 0, height: 0}}
        animate= {{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-blue-900 shadow-log px-4 py-5 space-y-5">
            <nav className="flex flex-col space-y-3">
                {["Inicio", "Servicios", "Contacto"].map((item) => (
                    <a  onClick={toggleMenu}
                    className="text-blue-400 font-medium py-2"
                    key={item} href={`#${item.toLowerCase()}`}>
                        {item}
                    </a>
                ))}
            </nav>

            <div className="pt-4 border-t border-gray200 dark: border-gray-700">

                <div className="flex spaces-x-5">

                    <a href="https://www.instagram.com/cuatrotorres" target="_blank">
                        <FaInstagram className="h-5 w-5 text-yellow-300"/>
                    </a>

                    <a href="#">
                        <FaWhatsapp className="h-5 w-5 text-yellow-300"/>
                    </a>
                </div>

                <button 
                onClick={() =>{
                    toggleMenu()
                }}
                className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-200 text-blue-700 font-bold italic hover:from-blue-700 hover:to-blue-500 hover:text-yellow-400 transition-colors duration-300">
                    Contactanos
                </button>

            </div>

        </motion.div>

        


    </header>
  )
}

export default Header