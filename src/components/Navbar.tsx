/*
import { Link } from "react-router-dom";
function Navbar() {
    return (


        <nav className="fixed top-0 w-full flex justify-between items-center p-2 z-20 bg-gray-900 bg-opacity-50">
            <div className="text-2xl font-bold "> profile pic</div>
            <div className="flex gap-6">
                <Link to="/" className="text-white">
                    home
                </Link>


                <Link to="/portfolio" className="text-white">
                    projects
                </Link>
                <Link to="/contactme" className="text-white">
                    contact me
                </Link>

            </div>
            <div className="text-2xl font-bold">darkmode light mode</div>
        </nav>


    )
}
export default Navbar;
*/



import { Link, useLocation } from "react-router-dom";

function Navbar() {


    const location = useLocation();



    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-gray-900 bg-opacity-70 backdrop-blur-md">
            {/* Profile Pic + Name */}
            <div className="flex items-center gap-3">

                <img src='./images/brianportfolio.jpeg' alt='hero image' className='w-10 h-10 rounded-full border' />


                <span className="text-white text-xl font-bold">Brian Timothy</span>
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
            <div><p className="
            text-white text-l">Portfolio website</p></div>
            {/* Theme toggle */}

        </nav>
    );
}

export default Navbar;