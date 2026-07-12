import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ErrorBoundary from "./ErrorBoundary";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kautsar Q. A.",
          from_email: form.email,
          to_email: "kasyim15@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='relative w-full flex flex-col'>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden pb-12`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Quick Contact & Social Handles */}
          <div className='mt-4 flex flex-col gap-3 border-b border-secondary/20 pb-6'>
            <p className='text-secondary text-[14px] leading-[20px]'>
              Feel free to reach out via the contact form or connect directly through the links below:
            </p>
            <div className='flex flex-wrap gap-x-4 gap-y-2 items-center mt-1'>
              <a href='mailto:kasyim15@gmail.com' className='text-white hover:text-[#915EFF] flex items-center gap-1.5 text-[13px] transition-colors'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M24 4.5v15c0 .85-.65 1.5-1.5 1.5H1.5C.65 21 0 20.35 0 19.5v-15c0-.85.65-1.5 1.5-1.5h21c.85 0 1.5.65 1.5 1.5zm-3 1.5H3v1.83l9 5.83 9-5.83V6zm0 3.67l-8.5 5.5c-.3.2-.7.2-1 0L3 9.67V18h18V9.67z'/>
                </svg>
                kasyim15@gmail.com
              </a>
              <span className='text-secondary/40 sm:block hidden'>|</span>
              <a href='https://linkedin.com/in/kautsar-quraisy-al-hamidy' target='_blank' rel='noopener noreferrer' className='text-white hover:text-[#915EFF] flex items-center gap-1.5 text-[13px] transition-colors'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                </svg>
                LinkedIn
              </a>
              <span className='text-secondary/40 sm:block hidden'>|</span>
              <a href='https://github.com/SARSSXD' target='_blank' rel='noopener noreferrer' className='text-white hover:text-[#915EFF] flex items-center gap-1.5 text-[13px] transition-colors'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
                GitHub
              </a>
              <span className='text-secondary/40 sm:block hidden'>|</span>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='text-[#915EFF] hover:underline font-bold text-[13px] flex items-center gap-1 transition-colors'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'/>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-6'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Message</span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What would you like to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px]'
                required
              />
            </label>

            <button
              type='submit'
              className='bg-[#915EFF] hover:bg-[#804dee] transition-all py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <ErrorBoundary fallback={
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-secondary text-[16px] italic">Failed to load 3D Earth. Form is still active.</p>
            </div>
          }>
            <EarthCanvas />
          </ErrorBoundary>
        </motion.div>
      </div>

      {/* Sleek Professional Recruiter Footer */}
      <footer className='border-t border-secondary/15 py-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left'>
        <p className='text-secondary text-[14px] italic'>
          "Always learning. Always building."
        </p>
        <p className='text-secondary text-[12px]'>
          &copy; {new Date().getFullYear()} Kautsar Quraisy Al Hamidy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
