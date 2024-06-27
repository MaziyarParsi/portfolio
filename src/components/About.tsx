import { motion } from "framer-motion";
import { styles } from "../config/styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motiontils";
import ServiceCard from "./ServiceCard/ServiceCard";
import { SectionWrapper } from "../HOC";

const About = () => {
  return (
    <>
      {/* @ts-ignore */}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        i’m Maziar, front-end developer with more than 6 years of experience in
        creating responsive, user-friendly web applications using HTML, CSS, JS,
        and modern JS frameworks like React, I have strong focus on system
        design and software architecture & consider myself skillfull in
        communication, collaboration, and technical analysis. I love teaching,
        so recently started my online courses Mentorship, proud to say that I
        have over 150 students.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
