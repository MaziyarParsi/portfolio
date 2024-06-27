import { motion } from 'framer-motion';

import { styles } from '../config/styles';
import { SectionWrapper } from '../HOC';
import { textVariant } from '../utils/motiontils';
import { testimonials } from '../constants';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* @ts-ignore */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            company={testimonial.company}
            designation={testimonial.designation}
            image={testimonial.image}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            link={testimonial.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
