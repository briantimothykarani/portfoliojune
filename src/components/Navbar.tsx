

import { Link, useLocation } from "react-router-dom";
import { motion} from "framer-motion";
function Navbar() {


    const location = useLocation();



    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-gray-900 bg-opacity-70 backdrop-blur-md">
            {/* Profile Pic + Name */}
            <div className="flex items-center gap-3">

                <img src='./images/brianportfolio.jpeg' alt='hero image' className='w-10 h-10 rounded-full border' />
                <motion.span
                style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                initial={{ width: 0}}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="text-white text-xl font-bold">Brian Timothy</motion.span>
            </div>

            {/* Center Links */}
            <div className="flex gap-8">
                <Link
                    to="/"
                    className={`text-lg font-semibold transition ${isActive("/") ? "text-purple-400 underline underline-offset-4" : "text-white"
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/portfolio"
                    className={`text-lg font-semibold transition ${isActive("/portfolio") ? "text-purple-400 underline underline-offset-4" : "text-white"
                        }`}
                >
                    Projects
                </Link>
                <Link
                    to="/contactme"
                    className={`text-lg font-semibold transition ${isActive("/contactme") ? "text-purple-400 underline underline-offset-4" : "text-white"
                        }`}
                >
                    Contact
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;
