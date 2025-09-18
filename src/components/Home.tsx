
import { motion } from 'framer-motion';
import Navbar from './Navbar';

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

        </>
    );
};

export default Home;
