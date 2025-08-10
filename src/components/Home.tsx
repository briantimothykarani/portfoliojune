
/*
import Navbar from './Navbar';

function Home() {
    return (
        <>
            <div>

                <Navbar />
                <div className="flex justify-between mt-16 bg-gray-900">
                    <div className="bg-gray-900 text-center m-auto w-1/2 h-160 p-8">
                        <p className="text-center text-white font-mono">My name is</p>
                        <p className="text-4xl font-bold text-center text-purple-700">Brian Timothy</p>
                        <p className="text-center text-white font-mono">I'm a </p>
                        <p className="text-6xl font-black text-center text-purple-700">Web Developer</p>
                        <p className="text-center text-white font-mono">Based in</p>
                        <p className="text-7xl font-bold text-purple-700 text-center">Nairobi, Kenya</p>




                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
*/
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import KenyaMap from './KenyaMap'; // assumes you created KenyaMap.tsx or .jsx

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            {/* Animated Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="min-h-screen flex justify-center items-center pt-20 bg-gray-900"
            >
                <div className="text-center text-white space-y-4">
                    <p className="font-mono">My name is</p>
                    <p className="text-4xl font-bold text-purple-700">Brian Timothy</p>
                    <p className="font-mono">I'm a</p>
                    <p className="text-6xl font-black text-purple-700">Web Developer</p>
                    <p className="font-mono">Based in</p>
                    <p className="text-7xl font-bold text-purple-700">Nairobi, Kenya</p>
                </div>
            </motion.div>

            {/* Nairobi / Kenya Map Below */}
            <div className="bg-gray-800 py-10">
                <h2 className="text-center text-white text-xl mb-4">My Location</h2>
                <KenyaMap />
            </div>
        </>
    );
};

export default Home;