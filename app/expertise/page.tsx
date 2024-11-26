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

const programmingLanguages: ProgrammingLanguage[] = [
  { name: 'Python', imagePath: '/assets/python.png' },
  { name: 'JavaScript', imagePath: '/assets/javascript.png' },
  { name: 'TypeScript', imagePath: '/assets/typescript.png' },
];

interface LicenseCertification {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  certificateLink: string;
  imagePath: string;
}
const licensesCertifications: LicenseCertification[] = [
  {
    title: 'Foundation of Cloud IoT Edge ML',
    issuer: 'NPTEL',
    issueDate: 'April 2024',
    description: 'Foundation of Cloud IoT Edge ML course covering Edge Computing, Cloud Integration, Docker and Kubernetes, Kafka, etc.',
    certificateLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS26S65351013530593153',
    imagePath: '/assets/NPTEL24CS26S65351013530593153.webp',
  },
];

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
    <section>
      <section className="w-full mt-20 pb-10">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="mx-10 px-8 pt-4">
            <h2 className="font-bold tracking-tight text-white font-star text-3xl">Programming languages</h2>
            <p className="mt-4 text-gray-400 dark:text-custom-purple">
              Here is my work skills and experience:
            </p>
          </div>
          <div className="ml-40 mt-10 flex gap-8">
            {programmingLanguages.map((language, index) => (
              <Card key={index} 
              className={cn(
                'w-24 p-4 h-full shadow-card',
                'rounded-lg shadow-lg hover:scale-105 border border-gray-300',
                'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
              )}>
                <div className="bg-primary-500 flex justify-evenly items-center flex-col">
                  <div className="bg-white rounded-full">
                    <Image
                      src={language.imagePath}
                      alt={language.name}
                      height={0}
                      sizes="100vw"
                      width={0}
                      className="w-16 h-16  filter-none rounded-full" />                  </div>
                  <h3 className="text-white text-[15px] font-bold text-center Nanum">{language.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-20 pb-10">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="mx-10 px-8 pt-4">
            <h2 className="font-bold tracking-tight text-white font-star text-3xl">Licenses and Certifications</h2>
            <p className="mt-4 text-gray-400 dark:text-custom-purple">
              Here are some certifications I have completed:
            </p>
          </div>
          <div className="ml-20 mt-10 grid max-w-xl gap-8">
            {licensesCertifications.map((certification, index) => (
              <Card
                key={index}
                className={cn(
                  'rounded-lg p-6 shadow-lg mx-4 lg:mx-20 border border-gray-300',
                  'transform bg-gray-50 transition-al rounded-lg'
                )}
              >
                <Link href={certification.certificateLink} target='_blank'>
                  <div className="flex items-center space-x-2">
                    <FaGraduationCap className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{certification.title}</h3>
                  </div>
                  <p className="mt-2 text-primary dark:text-primary">{certification.issuer}</p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Issued: {certification.issueDate}</p>
                  <Image 
                    src={certification.imagePath} 
                    alt="Certificate"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className='w-full'
                  />
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{certification.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-20 pb-10">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="mx-10 px-8 pt-4">
            <h2 className="font-bold tracking-tight text-white font-star text-3xl">Education</h2>
            <p className="mt-4 text-gray-400 dark:text-custom-purple">
              Here is my educational background:
            </p>
          </div>
          <div className="mx-auto mt-10 ml-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-1">
            {educations.map((education, index) => (
              <Card
                key={index}
                className={cn(
                  'rounded-lg p-6 shadow-lg mx-4 lg:mx-20 border border-gray-300',
                  'transform bg-gray-50 transition-all rounded-lg'
                )}
              >
                <div className="flex items-center space-x-2">
                  <FaGraduationCap className="h-6 w-6 text-gray-400 dark:text-custom-purple" />
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
