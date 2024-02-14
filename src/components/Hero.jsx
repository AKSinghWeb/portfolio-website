import { motion } from 'framer-motion'

import { styles } from '../styles'
import AnupamImage from '../assets/bg-merge.png'
import GitHubIcon from '../assets/github.png'
import LinkedInIcon from '../assets/linkedin.png'
import TwitterIcon from '../assets/twitter.png'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 sm:top-[160px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row max-md:flex-col-reverse max-md:justify-center items-start  gap-10`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-96 h-60 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Anupam</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate Full Stack Web Developer.
            </p>
            <p className="mt-4 sm:mt-8 ">
              <span className="blue-text-gradient">#React.js</span>,{' '}
              <span className="green-text-gradient">#Node.js</span>,{' '}
              <span className="blue-text-gradient">#Next.js</span>,{' '}
              <span className="green-text-gradient">#MongoDB</span>,{' '}
              <span className="pink-text-gradient">#TypeScript</span>,{' '}
              <span className="blue-text-gradient">#TailwindCSS,</span>{' '}
              <span className="pink-text-gradient">#GIT</span>
            </p>
            <div className="flex items-center mt-4 sm:mt-8 gap-4">
              <a
                href="https://github.com/aksinghweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHubIcon} alt="GitHub" className="w-10 h-10" />
              </a>
              <a
                href="https://linkedin.com/in/aksinghweb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="w-9 h-9" />
              </a>
              <a
                href="https://twitter.com/aksinghweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={TwitterIcon}
                  alt="twitter"
                  className="ml-1 w-10 h-10"
                />
              </a>
            </div>
            <div className="flex mt-4 sm:mt-8 gap-4">
              <a href="#contact">
                <button className="bg-gray-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary transition duration-300">
                  Contact
                </button>
              </a>
              <a href="#projects">
                <button
                  type="submit"
                  className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#6e48c0] transition duration-300"
                >
                  Projects
                </button>
              </a>
            </div>
          </div>
        </div>

        <img src={AnupamImage} alt="Anupam's Photo" className=" object-cover" />
      </div>

      <div className="absolute hidden sm:flex xs:bottom-10 bottom-16 w-full justify-center items-center">
        <a href="#about">
          <div className="sm:w-[35px] sm:h-[64px] w-[28px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
