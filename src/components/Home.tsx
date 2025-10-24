import { motion, easeOut } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Navbar from './Navbar';

const textVariant = (delay = 0): Variants => ({
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, delay, ease: easeOut }
  },
});

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center pt-20 bg-black">
        <div className="text-center text-white space-y-4">
          <motion.p {...textVariant(0)}>My name is</motion.p>
          <motion.p {...textVariant(0.1)} className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-700">
            Brian Timothy
          </motion.p>
          <motion.p {...textVariant(0.2)}>I'm a</motion.p>
          <motion.p {...textVariant(0.3)} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-purple-500">
            Web Developer
          </motion.p>
          <motion.p {...textVariant(0.4)}>Based in</motion.p>
          <motion.p {...textVariant(0.5)} className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400">
            Nairobi, Kenya
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Home;

