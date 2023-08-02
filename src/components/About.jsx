import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motions"
import { SectionWrapper } from "../hoc"

// This function gives tilt and styling to my service cards, which are used to display what services I offer.
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// The about section which contains a longer description of myself at the moment, along with some styling and animations. Also generates the service cards containers.
const About = () => {
  return (
    <>
      {/* This div contains the header of the section. */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* A not so brief description of myself at the moment. */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px max-w-3xl leading-[30px]"
      >
        Greetings! I am an experienced ESL teacher who has recently embarked on
        an exciting journey into the world of web development. My fascination
        with languages, whether spoken or in coding, has been the driving force
        behind my career transition. Alongside this passion, my enduring
        curiosity for programming and emerging technologies has led me to this
        new path. I recently completed the rigorous Full-Stack Web Development
        Bootcamp at Concordia University, equipping me with a diverse skill set.
        <br></br>
        <br></br>Originally hailing from Ville-Marie in Abitibi-Témiscamingue, I
        have recently relocated to the vibrant city of Montreal, where I am
        eagerly seeking my next opportunity in the web development industry. My
        adaptability allows me to work seamlessly both in Montreal and remotely,
        granting me the flexibility to collaborate effectively wherever the
        opportunity arises.
        <br></br>
        <br></br>I am enthusiastic about contributing my skills to innovative
        projects and joining a dynamic team. Let's connect and explore how my
        passion for languages and technology can add value to your organization!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* This is the function that maps over the "services" that I offer. */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
