import React from 'react';
import { FaCalendar, FaBriefcase } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Car } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Acme Corp',
    position: 'Software Engineer',
    duration: 'Jan 2022 - Present',
    description:
      'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.',
  },
  {
    company: 'Globex Inc.',
    position: 'Frontend Developer Intern',
    duration: 'Jun 2020 - Aug 2020',
    description:
      'Worked on building responsive user interfaces using React and Tailwind CSS. Gained experience in agile development methodologies.',
  },
  // Add more experiences as needed
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="pb-16 mb-16 mt-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
          <p className="mt-4 text-gray-400 dark:text-gray-500">
            Here are some of my professional experiences:
          </p>
        </div>
        <div className="m-10">

            {/**<Card className='p-4 lg:p-10 transform bg-gray-50 transition-all hover:scale-105'>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <FaBriefcase className="h-6 w-6 fill-gray-600 dark:fill-gray-500" />
                <h3 className="text-lg font-semibold text-cyan-600">{experience.position}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="h-6 w-6 fill-gray-600 dark:fill-gray-500" />
                <span className="text-gray-600 dark:text-gray-500">{experience.duration}</span>
              </div>
            </div>
            <p className="mt-2 text-gray-400 dark:text-gray-500">experience.position}</p>
  </Card>**/
  /** <Card className='p-20 m-20 p-4 lg:p-10 transform bg-gray-50 transition-all'>
          
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((experience, index) => (
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.position}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.position}</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></a>
              </li>
              ))}
            </ol>
          </Card> */}

<ol className="relative border-s border-gray-200 dark:border-gray-700">
  {experiences.map((experience, index) => (        
    <li className="mb-10 ms-6  p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 rounded-lg">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{experience.position}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.duration}</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
    </li>
     ))}
</ol>


        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;