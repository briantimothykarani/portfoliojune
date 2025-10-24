import Navbar from './Navbar';
import hugsScreenshot from '../assets/edited-hugs-hero-screenshot.png';
import nutrioScreenshot from '../assets/edited-nutrio-hero-screenshot.png';

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen flex items-center justify-center bg-green-300 dark:bg-gray-900 transition duration-300">
        <div className="w-4/5 lg:w-3/5 h-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-md border border-purple-200 dark:border-gray-600 hover:border-x-purple-700 shadow-purple-700">
          <p className="text-2xl font-bold mb-6 text-purple-400 text-center">Projects</p>
          <hr />
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-6">

            <a
              href="https://briantimothykarani.github.io/hugs-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              title="Hugs Project Live Site"
              className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition flex flex-col items-center"
            >
              <img
                src={hugsScreenshot}
                alt="Screenshot of Hugs project"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <span className="text-lg font-semibold">Hugs Project</span>
              <p className="text-sm text-gray-500 mt-1 cursor-pointer">View project</p>
            </a>

            <a
              href="https://briantimothykarani.github.io/nutrio-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              title="Nutrio Project Live Site"
              className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition flex flex-col items-center"
            >
              <img
                src={nutrioScreenshot}
                alt="Screenshot of Nutrio project"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <span className="text-lg font-semibold">Nutrio Project</span>
              <p className="text-sm text-gray-500 mt-1 cursor-pointer">View project</p>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

