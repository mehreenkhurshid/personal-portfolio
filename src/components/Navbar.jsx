import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-500">MyPortfolio</h1>

                <ul className="hidden md:flex space-x-8 text-gray-700 font-bold">
                    <li><a href="#home" className="hover:text-orange-500 cursor-pointer">Home</a></li>
                    <li><a href="#skills" className="hover:text-orange-500">Skills</a></li>
                    <li><a href="#projects" className="hover:text-orange-500 cursor-pointer">Projects</a></li>
                    <li><a href="#contact" className="hover:text-orange-500 cursor-pointer">Contact</a></li>
                </ul>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
                    <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
                        <li><a href="#home" className="hover:text-orange-500 cursor-pointer">Home</a></li>
                        <li><a href="#skills" className="hover:text-orange-500">Skills</a></li>
                        <li><a href="#projects" className="hover:text-orange-500 cursor-pointer">Projects</a></li>
                        <li><a href="#contact" className="hover:text-orange-500 cursor-pointer">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
