import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

// Interfaces remain the same as in the original code
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
interface Framework {
  name: string;
  imagePath: string;
}

interface ToolsandInfra {
  name: string;
  imagePath: string;
}
interface LicenseCertification {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  certificateLink: string;
  imagePath: string;
  logoPath: string;
}

// Arrays remain the same as in the original code
const programmingLanguages: ProgrammingLanguage[] = [
  { 
    name: 'Arduino',
    imagePath: '/assets/arduino.png' 
  },
  { 
    name: 'JavaScript', 
    imagePath: '/assets/javascript.png' 
  },
  { 
    name: 'TypeScript', 
    imagePath: '/assets/typescript.png' 
  },
  { 
    name: 'Python', 
    imagePath: '/assets/python.png' 
  },
  { 
    name: 'MicroPython', 
    imagePath: '/assets/MicroPython_new_logo.png'
  },
  { 
    name: 'C', 
    imagePath: '/assets/c.png' 
  },
  { 
    name: 'C++',
    imagePath: '/assets/cpp.png' 
  },
];
const frameworks: Framework[] = [
  {
    name: 'Next.js',
    imagePath: '/assets/nextjs-icon.png',
  },
  {
    name: 'React',
    imagePath: '/assets/react.png',
  },
  {
    name: 'Node.js',
    imagePath: '/assets/node-js.webp',
  },
  { 
    name: 'Tailwind', 
    imagePath: '/assets/tailwind.png' 
  },
  {
    name: 'Prisma',
    imagePath: '/assets/prisma-orm.png',
  },
  {
    name: 'Mongoose',
    imagePath: '/assets/mongoose-odm.jpg',
  },
];
const tools_and_infra:ToolsandInfra[] = [
  {
    name: 'GitHub',
    imagePath: '/assets/github-logo.png',
  },
  {
    name: 'Git',
    imagePath: '/assets/Git-Icon.png',
  },
  {
    name: 'MongoDB',
    imagePath: '/assets/MongoDB.jpg',
  },
  {
    name: 'VSCode',
    imagePath: '/assets/vscode.png',
  },
  { 
    name: 'Arduino IDE', 
    imagePath: '/assets/arduino.png' 
  },
  { 
    name: 'Thonny', 
    imagePath: '/assets/Thonny_logo.png' 
  },
  {
    name: 'Linux',
    imagePath: '/assets/linux.png',
  },
];
const licensesCertifications: LicenseCertification[] = [
  {
    title: 'Foundation of Cloud IoT Edge ML',
    issuer: 'NPTEL',
    issueDate: 'April 2024',
    description: 'Foundation of Cloud IoT Edge ML course covering Edge Computing, Cloud Integration, Docker and Kubernetes, Kafka, etc.',
    certificateLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS26S65351013530593153',
    imagePath: '/assets/NPTEL24CS26S65351013530593153.webp',
    logoPath: '/assets/nptel.png',
  },
  {
    title: 'Career Essentials in GitHub',
    issuer: 'GitHub & LinkedIn Learning',
    issueDate: 'November 2024',
    description: 'Foundation of GitHub and Professional Development course covering version control, collaboration, and professional skills.',
    certificateLink: 'https://www.linkedin.com/learning/certificates/59c0e2acd4349d169fa3b3f2ddb1699dc27de2a7ab90c3676359f855889a0efc',
    imagePath: '/assets/linkedin-github-foundations.jpg',
    logoPath: '/assets/github-logo.png',
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn Learning',
    issueDate: 'March 2024',
    description: 'Foundation of Software Development course covering programming, debugging, testing, and deployment.',
    certificateLink: 'https://www.linkedin.com/learning/certificates/2e0a238093805d7199aa48b1f7f2792351f7eeb8dbef4f1c7accc3363fd9bcb9',
    imagePath: '/assets/linkedin-microsoft-sd.jpg',
    logoPath: '/assets/Microsoft_Logo.svg',
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    issueDate: 'January 2024',
    description: 'Python course covering foundational programming concepts, classes, and data structures.',
    certificateLink: 'https://www.hackerrank.com/certificates/0227798a014b',
    imagePath: '/assets/hackerrank-python.png',
    logoPath: '/assets/HackerRank.png',
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

const ExpertiseSection: React.FC = () => {
  return (
    <section>
      {/* Programming Languages Section */}
      <section className="w-full mt-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="lg:mx-10 lg:px-8 pl-4 pt-4">
            <h2 className="font-bold tracking-tight text-gray-800 dark:text-white font-star text-3xl">Programming Languages</h2>
          </div>
          <div className="mx-10 lg:ml-40 mt-10 flex flex-wrap justify-center lg:justify-normal gap-8">
            {programmingLanguages.map((language, index) => (
              <Card 
                key={index}
                className={cn(
                  'p-4 h-full shadow-card',
                  'rounded-lg shadow-lg hover:scale-105 border border-gray-300',
                  'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
                )}
              >
                <div className="bg-primary-500 flex justify-evenly items-center flex-col">
                  <div className="bg-white rounded-full">
                    <Image
                      src={language.imagePath}
                      alt={language.name}
                      height={0}
                      sizes="100vw"
                      width={0}
                      className="w-16 h-16 filter-none rounded-full" 
                    />
                  </div>
                  <h3 className="dark:text-white text-[15px] font-bold text-center Nanum">{language.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-10">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-10 lg:px-8 pl-4 pt-4">
            <h2 className="font-bold tracking-tight text-gray-800 dark:text-white font-star text-3xl">Frameworks</h2>
          </div>
          <div className="mx-10 lg:ml-40 mt-10 flex flex-wrap justify-center lg:justify-normal gap-8">
          {frameworks.map((framework, index) => (
              <Card 
                key={index}
                className={cn(
                  'w-24 p-4 h-full shadow-card',
                  'rounded-lg shadow-lg hover:scale-105 border border-gray-300',
                  'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
                )}
              >
                <div className="bg-primary-500 flex justify-evenly items-center flex-col">
                  <div className="bg-white rounded-full">
                    <Image
                      src={framework.imagePath}
                      alt={framework.name}
                      height={0}
                      sizes="100vw"
                      width={0}
                      className="w-16 h-16 filter-none rounded-full" 
                    />
                  </div>
                  <h3 className="dark:text-white text-[15px] font-bold text-center Nanum">{framework.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-10">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-10 lg:px-8 pl-4 pt-4">
            <h2 className="font-bold tracking-tight text-gray-800 dark:text-white font-star text-3xl">Tools & Infra</h2>
          </div>
          <div className="mx-10 lg:ml-40 mt-10 flex flex-wrap justify-center lg:justify-normal gap-8">
          {tools_and_infra.map((tools_and_infra, index) => (
              <Card 
                key={index}
                className={cn(
                  'p-4 h-full shadow-card',
                  'rounded-lg shadow-lg hover:scale-105 border border-gray-300',
                  'transform bg-gray-50 transition-all hover:scale-105 rounded-lg'
                )}
              >
                <div className="bg-primary-500 flex justify-evenly items-center flex-col">
                  <div className="bg-white rounded-full">
                    <Image
                      src={tools_and_infra.imagePath}
                      alt={tools_and_infra.name}
                      height={0}
                      sizes="100vw"
                      width={0}
                      className="w-16 h-16 filter-none rounded-full" 
                    />
                  </div>
                  <h3 className="dark:text-white text-[15px] font-bold text-center Nanum">{tools_and_infra.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Licenses and Certifications Section */}
      <section className="w-full mt-10">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-10 lg:px-8 pl-4 pt-4">
            <h2 className="font-bold tracking-tight text-gray-800 dark:text-white font-star text-3xl">Licenses and Certifications</h2>
          </div>
          <div className="lg:mx-40 mx-4">
            <div className="flex flex-wrap lg:justify-between mt-10 max-w-6xl gap-8 justify-center">
              {licensesCertifications.map((certification, index) => (
                <Card
                  key={index}
                  className='w-full max-w-md p-6 mb-8 shadow-lg rounded-lg border border-gray-300'
                >
                  <Link href={certification.certificateLink} target="_blank" className="block">
                    <div className="flex items-center space-x-2 mb-4">
                    <Image 
                      src={certification.logoPath} 
                      alt="Certifying Organization Logo"
                      height={24}
                      width={24}
                      className='bg-white'
                    />
                      <h3 className="text-lg font-semibold text-gray-900 dark:dark:text-white">
                        {certification.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-primary dark:text-primary">{certification.issuer}</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Issued: {certification.issueDate}
                    </p>
                    <div className="mt-4 mb-4">
                      <Image
                        src={certification.imagePath}
                        alt="Certificate"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {certification.description}
                    </p>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full mt-10 pb-10">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:mx-10 lg:px-8 pl-4 pt-4">
            <h2 className="font-bold tracking-tight text-gray-800 dark:text-white font-star text-3xl">Education</h2>
          </div>
          <div className="mx-auto mt-10 lg:ml-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-1">
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:dark:text-white">
                    {education.degree}
                  </h3>
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

export default ExpertiseSection;
