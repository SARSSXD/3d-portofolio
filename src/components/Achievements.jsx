import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  title,
  issuer,
  year,
  description,
  icon,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full border border-secondary/10 flex flex-col justify-between shadow-lg'
  >
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-start gap-2'>
        <img
          src={icon}
          alt={title}
          className='w-12 h-12 object-contain bg-white/10 p-2 rounded-full border border-secondary/20'
        />
        <span className='bg-[#915EFF]/20 border border-[#915EFF]/40 text-[#915EFF] px-3 py-1 rounded-full text-[12px] font-bold'>
          {year}
        </span>
      </div>

      <div className='flex flex-col gap-1.5'>
        <h3 className='text-white font-bold text-[18px] leading-[22px]'>{title}</h3>
        <p className='text-[#915EFF] text-[13px] font-semibold'>{issuer}</p>
      </div>

      <p className='text-secondary text-[14px] leading-[20px] mt-1'>
        {description}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[260px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My accomplishments</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center sm:justify-start`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
