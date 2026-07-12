import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, categorizedSkills } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Toolkit</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Categorized Skills Grid for Recruiter Readability */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categorizedSkills.map((cat, catIndex) => (
          <motion.div
            variants={fadeIn("right", "spring", catIndex * 0.1, 0.5)}
            key={cat.category}
            className='bg-tertiary p-6 rounded-2xl border border-secondary/10 flex flex-col gap-4 shadow-lg hover:border-[#915EFF]/40 transition-all duration-300'
          >
            <h3 className='text-[#915EFF] font-bold text-[18px] border-b border-secondary/20 pb-2'>
              {cat.category}
            </h3>
            
            <div className='flex flex-wrap gap-2'>
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-1.5 bg-black-200 border border-secondary/15 px-3 py-1.5 rounded-lg hover:bg-black-100 transition-colors'
                >
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className='w-4 h-4 object-contain' />
                  ) : (
                    <span className='w-1.5 h-1.5 rounded-full bg-[#915EFF]' />
                  )}
                  <span className='text-white text-[12px] font-semibold'>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive 3D Ball Canvas (Preserved visual premium assets) */}
      <div className='mt-20'>
        <p className='text-secondary text-[13px] uppercase tracking-wider font-semibold text-center mb-8'>
          Interactive Core Technology Orbs (Click & Drag)
        </p>
        <div className='flex flex-row flex-wrap justify-center gap-8'>
          {technologies.map((technology) => (
            <div className='w-20 h-20 sm:w-24 sm:h-24' key={technology.name} title={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
