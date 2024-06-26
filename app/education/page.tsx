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
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2016 - 2020',
    description:
      'Graduated with honors. Relevant coursework included Data Structures, Algorithms, Computer Networks, and Software Engineering.',
  },
  {
    institution: 'Stanford University',
    degree: 'Master of Science in Artificial Intelligence',
    duration: '2020 - 2022',
    description:
      'Focused on Machine Learning, Natural Language Processing, and Computer Vision. Thesis: "Deep Learning for Image Recognition".',
  },
  // Add more education entries as needed
];

const EducationSection: React.FC = () => {
  return (
    <section className="w-full mt-20 pb-10">

      <div className="px-4 sm:px-6 lg:px-8">
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
                'rounded-lg p-6 shadow-lg hover:scale-105 mx-4 lg:mx-20',
                'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
              )}
            >
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
              </div>
              <p className="mt-2 text-gray-400 dark:text-gray-500">{education.institution}</p>
              <p className="mt-2 text-gray-400 dark:text-gray-500">{education.duration}</p>
              {education.description && (
                <p className="mt-2 text-gray-400 dark:text-gray-500">{education.description}</p>
              )}
            </Card>
          ))}
        </div>
      </div>


    </section>
  );
};

export default EducationSection;