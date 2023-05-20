import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({
  date,
  iconBg,
  icon,
  companyName,
  title,
  points,
}: {
  date: string;
  iconBg: string;
  icon: string;
  companyName: string;
  title: string;
  points: string[];
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center h-full w-full">
          <img
            src={icon}
            alt={companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
          {companyName}
        </p>
      </div>
      <ul className="mt-5 list-disc space-y-2 px-4">
        {points.map((point) => (
          <li
            key={point}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
