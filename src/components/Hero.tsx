import { motion } from 'framer-motion';
import { styles } from '../config/styles';
import Lottie from 'lottie-react';
import Programming from '../assets/lottie/programming.json';

const Hero = () => {
  return (
    <section className="relative w-full h-heroSection mx-auto  ">
      <div
        className={`${styles.paddingX} relative inset-0 top-[100px] max-w-7xl mx-auto flex  lg:flex-row items-start gap-5`}
      >
        {/* violet line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white my-2`}>
            Hi, My name is <span className="text-[#915eff] flex">Maziyar</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I'm a front-end developer with industry
            <br /> experience building website and web applications
          </p>
        </div>
        <Lottie
          animationData={Programming}
          loop={true}
          className="hidden lg:block"
        />
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-16  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
