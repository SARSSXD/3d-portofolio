import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          ) : (
            <span className='text-white font-bold text-[18px]'>
              {experience.company_name.charAt(0)}
            </span>
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold flex justify-between items-center'
          style={{ margin: 0 }}
        >
          <span>{experience.company_name}</span>
          {experience.location && (
            <span className='text-secondary/60 text-[12px] font-normal italic'>{experience.location}</span>
          )}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.technologies && (
        <div className='mt-4 flex flex-wrap gap-1.5 items-center'>
          <span className='text-[12px] text-secondary font-semibold mr-1'>Stack:</span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className='text-[11px] text-white bg-tertiary px-2 py-0.5 rounded border border-secondary/20 font-medium'
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {experience.impact && (
        <div className='mt-4 p-3 bg-tertiary/60 border border-[#915EFF]/20 rounded-lg'>
          <p className='text-[#915EFF] text-[12px] font-bold uppercase tracking-wider'>Key Impact</p>
          <p className='text-white-100 text-[13px] mt-1 leading-[18px]'>{experience.impact}</p>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work", "sm:!pt-0 !pt-0");
