import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [Nav, setNav] = useState(false);
     
    const handleNav = () => {
        setNav(!Nav);
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#B3DEE5]">BuzzVibe</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={Nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#31525B] ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500"}>
                <h1 className="w-full text-3xl font-bold text-[#B3DEE5] m-4">BuzzVibe.</h1>    
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>  
    );
}

export default Navbar;
