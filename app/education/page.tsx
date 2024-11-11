import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

const educations: Education[] = [
  {
    institution: 'Aalim Muhammed Salegh College of Engineering, Chennai 600055',
    degree: 'Bachelor of Electronics and Communication Engineering',
    duration: '2022 - 2026',
    description:
      "Pursuing a Bachelor's degree in Electronics and Communication Engineering with a strong foundation in core principles. Relevant coursework includes Microprocessors and Microcontrollers, Embedded Systems, Digital Electronics, Signal Processing, Analog and Digital Communication, and Wireless Communication.",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className="w-full mt-20 pb-10">

      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Education</h2>
          <p className="mt-4 text-gray-400 dark:text-gray-500">
            Here is my educational background:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1">
          {educations.map((education, index) => (
            <Card
              key={index}
              className={cn(
                'rounded-lg p-6 shadow-lg hover:scale-105 mx-4 lg:mx-20 border border-gray-300',
                'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
              )}
            >
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
              </div>
              <p className="mt-2 text-primary dark:text-primary">{education.institution}</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{education.duration}</p>
              {education.description && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{education.description}</p>
              )}
            </Card>
          ))}
        </div>
      </div>


    </section>
  );
};

export default EducationSection;