/*
import Navbar from './Navbar'
function Portfolio() {
    return (
        <>
            <div>
                <Navbar /><br /><br />
                <div className="min-h-screen flex items-center justify-center bg-green-300 dark:bg-gray-900 transition duration-300">
                    <div className="w-250 h-120 bg-white dark:bg-gray-800 text-black dark:text-white rounded  border  shadow-md border-purple-200 dark:border-gray-600 hover:border-x-purple-700 shadow-purple-700">
                        <p className="text-2xl font-bold mb-6 text-purple-400 text-center">Projects</p>
                        <hr />
                        <br /><br />
                        <div className="flex justify-around ">
                            <p className="text-center bg-white w-85 h-85">PROJECT1</p>


                            <p className="text-center bg-white w-85 h-85">PROJECT2</p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );

};
export default Portfolio;
*/
import Navbar from './Navbar';
import { Github } from 'lucide-react';

function Portfolio() {
    return (
        <>
            <Navbar />
            <div className="pt-20  min-h-screen flex items-center justify-center bg-green-300 dark:bg-gray-900 transition duration-300">
                <div className="w-3/5 h-3/5 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-md border border-purple-200 dark:border-gray-600 hover:border-x-purple-700 shadow-purple-700">
                    <p className="text-2xl font-bold mb-6 text-purple-400 text-center">Projects</p>
                    <hr />
                    <div className="flex f gap-6 items-center justify-center py-6">

                        <p><a
                            href="https://github.com/yourusername/project1"
                            target="_blank"
                            title="GitHub Project 1"
                            className="w-90 h-90 bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition flex items-center justify-between"
                        >
                            <span className="text-lg font-semibold">Project One</span>
                            <Github className="text-black dark:text-white" size={20} />
                        </a></p>

                        <p> <a
                            href="https://github.com/yourusername/project2"
                            target="_blank"
                            title="GitHub Project 2"
                            className="w-90 h-90 bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition flex items-center justify-between"
                        >
                            <span className="text-lg font-semibold">Project Two</span>
                            <Github className="text-black dark:text-white" size={20} />
                        </a></p>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Portfolio;

