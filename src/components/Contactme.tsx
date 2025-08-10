/*
import Navbar from "./Navbar";

function Contactme() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-green-300 dark:bg-gray-900 transition duration-300">
                <Navbar />
                <div className="w-250 h-70  dark:bg-gray-800 text-black dark:text-white rounded  shadow-md border-purple-400  dark:border-gray-600 hover:border-x-purple-700 shadow-purple-700">
                    <p className="text-2xl font-bold mb-6 text-purple-400 text-center">contact me</p>
                    <hr />
                    <div className="flex items-center justify-between p-8 m-6 ">
                        <p className="bg-white">gmail</p>
                        <p className="bg-white">upwork</p>
                        <p className="bg-white">fiverr</p>
                        <p className="bg-white">linkedin</p>
                    </div>
                </div>

            </div>

        </>
    )

}
export default Contactme;
*/
import Navbar from './Navbar';


function Contactme() {
    return (
        <>
            <Navbar />
            <div className="pt-20 min-h-screen flex items-center justify-center bg-green-300 dark:bg-gray-900 transition duration-300">
                <div className="w-3/5 h-3/5 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-md border border-purple-400 dark:border-gray-600 hover:border-x-purple-700 shadow-purple-700">
                    <p className="text-2xl font-bold mb-6 text-purple-400 text-center">Contact Me</p>
                    <hr />
                    <div className="flex gap-4 items-center justify-center p-6">

                        <a href="mailto:briantimothy@example.com" target="_blank" title="Email Me"
                            className="flex items-center gap-3 bg-white px-4 py-2 text-blue-700 rounded hover:underline transition hover:scale-105">

                            <img src='./images/gmail.png' alt='gmail' className='w-5 h-5' />Gmail
                        </a>

                        <a href="https://www.upwork.com/freelancers/~your-upwork-profile" target="_blank" title="Upwork"
                            className="flex items-center gap-3 bg-white px-4 py-2 text-green-600 rounded hover:underline transition hover:scale-105">

                            <img src='./images/upwork.png' alt='gmail' className='w-5 h-5' /> Upwork
                        </a>

                        <a href="https://www.fiverr.com/yourusername" target="_blank" title="Fiverr"
                            className="flex items-center gap-3 bg-white px-4 py-2 rounded text-green-600 hover:underline transition hover:scale-105">

                            <img src='./images/twitter.png' alt='gmail' className='w-5 h-5' /> Twitter
                        </a>

                        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" title="LinkedIn"
                            className="flex items-center gap-3 bg-white px-4 py-2 rounded text-blue-700 hover:underline transition hover:scale-105">

                            <img src='./images/linkedin.png' alt='gmail' className='w-5 h-5' /> LinkedIn
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Contactme;

