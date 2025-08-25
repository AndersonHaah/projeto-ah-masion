import { Rotate as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './Hamburger2.css'

export default function HamburguerMenu() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='div-hamburger2'>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="black"
                duration={1}
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-header-container2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <nav className="nav-header2">
                            <a href="#homepage">INICIO</a>
                            <a href="#about">SOBRE</a>
                            <a href="#contact">CONTATOS</a>
                            <a href="#footer">COMEÇAR</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
