import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";

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
  );
};

// The about section which contains a longer description of myself at the moment, along with some styling and animations. Also generates the service cards containers.
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px max-w-3xl leading-[30px]"
      >
        I am a former ESL teacher who has recently made the switch to web
        development. You could say that I am passionate about all languages, no
        matter if they are spoken languages or coding languages. I have chosen
        such a different career path not only for this reason but also because
        of my long-standing interest in programming and new technologies. I
        recently graduated from the Full-Stack Web Development Bootcamp at
        Concordia University, and I'm now looking for my next opportunity in the
        industry. I am originally from Ville-Marie (the one in
        Abitibi-Témiscamingue), but I recently moved to Montreal and I am
        available for work there or remotely.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
