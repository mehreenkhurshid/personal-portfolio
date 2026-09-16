import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-md fixed w-full z-20 top-0 left-0"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold text-orange-500 cursor-pointer"
                >
                    MyPortfolio
                </motion.h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-bold">
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.2,
                            }}
                        >
                            <a
                                href={link.href}
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/90 backdrop-blur-md shadow-lg overflow-hidden"
                    >
                        <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.08,
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block hover:text-orange-500 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;