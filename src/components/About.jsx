import React from "react";
// import { Tilt } from 'react-tilt'
import Tilt  from "react-parallax-tilt";
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an enthusiastic Information Technology undergrad with a familiarity
        with the various web development technologies like React.js,
        TailwindCSS, Node.js, MongoDB, Git/GitHub, REST API. Currently exploring
        the fascinating world of web development, I have a particular interest
        in creating robust and scalable applications and eagerly keeping up with
        the latest trends in web development. I am a quick learner and a team
        player with a strong work ethic and a passion for software development.
      </motion.p>

      <div className="flex mt-16 items-center flex-wrap gap-6 justify-center">
        {technologies.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeIn('', '', 0.1, 1)}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-2 mx-auto shadow-lg rounded-lg"
            />
            <p className="text-gray-300 text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
