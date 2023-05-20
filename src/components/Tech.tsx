import { SectionWrapper } from '../HOC';
import { styles } from '../config/styles';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText}>Skills</h2>
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} name={tech.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
