import { motion } from 'framer-motion';
import { styles } from '../config/styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motiontils';
import ServiceCard from './ServiceCard/ServiceCard';
import { SectionWrapper } from '../HOC';

const About = () => {
  return (
    <>
      {/* @ts-ignore */}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a front-end developer with industry experience building website and
        web applications. I am specialized in JavaScript and have professional
        experience working with React, Next JS & Vanila JavaScript. I have
        always been a hard-working developer looking for new challenges and
        different experiences . I love teaching, so recently started my online
        courses Mentorship, proud to say that I have over 150 students.
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

export default SectionWrapper(About, 'about');
