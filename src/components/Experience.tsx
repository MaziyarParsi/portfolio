import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../config/styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../HOC';
import { textVariant } from '../utils/motiontils';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience = () => {
  return (
    <>
      {/* @ts-ignore */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've done till now</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              date={experience.date}
              iconBg={experience.iconBg}
              icon={experience.icon}
              companyName={experience.company_name}
              title={experience.title}
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
