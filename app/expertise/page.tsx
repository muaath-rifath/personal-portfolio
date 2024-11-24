import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

interface ProgrammingLanguage {
  name: string;
  imagePath: string;
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

const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: 'Python',
    imagePath: '/assets/python.png',
  },
  {
    name: 'JavaScript',
    imagePath: '/assets/javascript.png',
  },
  {
    name: 'TypeScript',
    imagePath: '/assets/typescript.png',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section>
      <section className="w-full mt-20 pb-10">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="mx-10 px-8 pt-4">
            <h2 className="font-bold tracking-tight text-white text-3xl">Programming languages</h2>
            <p className="mt-4 text-gray-400 dark:text-gray-500">
              Here is the programming languages I have experience with:
            </p>
          </div>
          <Card className="ml-40 mt-10 grid grid-cols-1 gap-8 max-w-20 lg:grid-cols-1">
            {programmingLanguages.map((language, index) => (
              <div key={index} className="w-full h-full rounded-[20px] shadow-card">
                <div className="bg-primary-500 rounded-[20px] py-3 px-3 flex justify-evenly items-center flex-col">
                  <div className="bg-white rounded-full p-2">
                    <img
                      src={language.imagePath}
                      alt={language.name.toLowerCase()}
                      className="w-10 h-10 object-contain filter-none" />
                  </div>
                  <h3 className="text-white text-[15px] font-bold text-center Nanum">{language.name}</h3>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>
      <section className="w-full mt-20 pb-10">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Licenses and Certifications</h2>
            <p className="mt-4 text-gray-400 dark:text-gray-500">
              Here are some certifications I have completed:
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8">
            <Card
              className={cn(
                'rounded-lg p-6 shadow-lg hover:scale-105 mx-4 lg:mx-20 border border-gray-300',
                'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
              )}
            >
              <Link href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS26S65351013530593153" target='_blank'>
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Foundation of Cloud IoT Edge ML</h3>
              </div>
              <p className="mt-2 text-primary dark:text-primary">NPTEL</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Issued: April 2024</p>
              <Image 
              src="/assets/NPTEL24CS26S65351013530593153.webp" 
              alt="NPTEL Certificate"
              height={0}
              width={0}
              sizes="100vw"
              className='w-full'
              />
              <p className="mt-2 text-gray-600 dark:text-gray-300">Foundation of Cloud IoT Edge ML course covering Edge Computing, Cloud Integration, Docker and Kubernetes, Kafka,etc. </p>
              </Link>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full mt-8 pb-10">
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
    </section>
  );
};

export default EducationSection;
