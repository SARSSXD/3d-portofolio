import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Kautsar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build end-to-end web applications, scalable backend <br className='sm:block hidden' />
            architectures, cross-platform mobile apps, and IoT systems.
          </p>

          {/* Recruiter Statistics Badges */}
          <div className='mt-8 flex flex-wrap gap-4'>
            <div className='bg-tertiary/60 backdrop-blur-sm border border-secondary/20 rounded-xl px-4 py-2.5 flex flex-col justify-center min-w-[130px] shadow-lg'>
              <span className='text-[#915EFF] text-[20px] font-bold sm:text-[24px]'>2+</span>
              <span className='text-secondary text-[11px] uppercase tracking-wider font-semibold mt-0.5'>Professional Roles</span>
            </div>
            <div className='bg-tertiary/60 backdrop-blur-sm border border-secondary/20 rounded-xl px-4 py-2.5 flex flex-col justify-center min-w-[130px] shadow-lg'>
              <span className='text-[#915EFF] text-[20px] font-bold sm:text-[24px]'>20+</span>
              <span className='text-secondary text-[11px] uppercase tracking-wider font-semibold mt-0.5'>Features Delivered</span>
            </div>
            <div className='bg-tertiary/60 backdrop-blur-sm border border-secondary/20 rounded-xl px-4 py-2.5 flex flex-col justify-center min-w-[130px] shadow-lg'>
              <span className='text-white font-bold text-[16px] sm:text-[18px]'>Flutter &bull; Laravel</span>
              <span className='text-secondary text-[11px] uppercase tracking-wider font-semibold mt-1.5'>Core Tech Stack</span>
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
