/* eslint-disable @typescript-eslint/ban-ts-comment */
import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../config/styles';
import { staggerContainer } from '../utils/motiontils';

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        // @ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        id={idName}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} mx-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
