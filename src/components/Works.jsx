import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  is_private,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full min-h-[460px] shadow-lg border border-secondary/5 hover:border-[#915EFF]/30 transition-all'
      >
        <div>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-between items-start m-3 card-img_hover'>
              {is_private ? (
                <span className='bg-black/80 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-[10px] tracking-wider uppercase font-bold px-2 py-1 rounded-md shadow-md'>
                  Private Code
                </span>
              ) : (
                <div />
              )}
              
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md'
                title={is_private ? "View GitHub Profile" : "View Source Code"}
              >
                <img
                  src={github}
                  alt='github icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[22px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-[22px]'>{description}</p>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my software engineering capabilities through
          real-world implementations. Each card summarizes the problem solved,
          integrations achieved (payment processing, sensors, or dashboards), and the key technologies used.
          It reflects my ability to manage complex application lifecycles, write clean code, and adapt across different frameworks.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
