import { motion } from 'framer-motion';
import Navbar from './Navbar';

const textVariant = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center pt-20 bg-black">
        <div className="text-center text-white space-y-4">

          {/* Name */}
          <motion.p {...textVariant(0)}>My name is</motion.p>
          <motion.p {...textVariant(0.1)} className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-700">
            Brian Timothy
          </motion.p>

          {/* Role */}
          <motion.p {...textVariant(0.2)}>I'm a</motion.p>
          <motion.p {...textVariant(0.3)} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-purple-500">
            Web Developer
          </motion.p>

          {/* Location */}
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

