import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, institution, degree, duration, details, gpa }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-8 rounded-2xl border border-secondary/10 w-full md:w-[48%] flex flex-col justify-between shadow-lg'
  >
    <div>
      <div className='flex justify-between items-start gap-2 flex-wrap'>
        <h3 className='text-white font-bold text-[22px]'>{institution}</h3>
        <span className='text-secondary text-[14px] font-semibold italic'>{duration}</span>
      </div>
      <p className='text-[#915EFF] text-[16px] font-bold mt-2'>{degree}</p>
      {details && <p className='text-white-100 text-[14px] mt-4 leading-[22px]'>{details}</p>}
    </div>
    
    {gpa && (
      <div className='mt-6 pt-4 border-t border-secondary/10 flex justify-between items-center'>
        <span className='text-secondary text-[14px] font-medium'>Performance Metric:</span>
        <span className='text-white font-bold bg-[#915EFF]/20 border border-[#915EFF]/40 px-3 py-1 rounded-lg text-[14px]'>
          {gpa}
        </span>
      </div>
    )}
  </motion.div>
);

const Education = () => {
  const educationList = [
    {
      institution: "UIN Maulana Malik Ibrahim Malang",
      degree: "Bachelor's Degree in Informatics Engineering (In Progress)",
      duration: "Aug 2022 - Present",
      gpa: "GPA: 3.82 / 3.93",
      details: "Focusing on core subjects such as Database Systems, Object-Oriented Programming, Algorithms, Software Engineering, and Networking. Serving as an active Laboratory Assistant helping other students master these topics.",
    },
    {
      institution: "MAN Insan Cendekia Pasuruan",
      degree: "Senior High School (Science Division)",
      duration: "Jul 2019 - Jul 2022",
      gpa: "Grade: 86.00 / 100.00",
      details: "Studied core sciences and mathematics in a highly selective boarding school environment. Developed initial interests in programming and algorithm workflows.",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-12 flex flex-wrap gap-8 justify-between'>
        {educationList.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
