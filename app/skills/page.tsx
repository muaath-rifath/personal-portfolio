import React from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon  } from '@heroicons/react/outline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface Language {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const languages: Language[] = [
  {
    name: 'Java',
    description: 'Experienced in developing robust applications using Java and its ecosystem.',
    icon: FaJava,
  },
  {
    name: 'Python',
    description: 'Proficient in using Python for data analysis, machine learning, and scripting.',
    icon: FaPython,
  },
  {
    name: 'React',
    description: 'Skilled in building modern user interfaces with React and its related libraries.',
    icon: FaReact,
  },
];
interface Skill {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const skills: Skill[] = [
  {
    name: 'Web Development',
    description: 'Proficient in building responsive and interactive web applications using modern front-end frameworks like React, Angular, and Vue.js.',
    icon: CodeIcon,
  },
  
  {
    name: 'Database Management',
    description: 'Strong knowledge of relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB.',
    icon: DatabaseIcon,
  },
  {
    name: 'DevOps and Cloud Computing',
    description: 'Familiar with DevOps practices and cloud platforms like AWS, Azure, and Google Cloud Platform.',
    icon: ServerIcon,
  },
];


interface Language {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}



const SkillsSection: React.FC = () => {
  return (
    <section className="mt-20 pb-8">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">Skills</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Here are some of the key skills and technologies I've been working with:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.name} className="transform bg-gray-50 transition-all hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-x-4">
                <CardTitle className="text-lg text-gray-900 dark:text-white font-semibold">{skill.name}</CardTitle>
                <skill.icon className="h-6 w-6 text-gray-900 dark:text-white font-semibold" />
              </CardHeader>
              <CardContent>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 mt-10 pt-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Programming Languages and Frameworks</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-500">
            Here are some of the key programming languages and frameworks I've been working with:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {languages.map((language) => (
            <Card key={language.name} className=" transform  transition-all hover:scale-105">
              <CardHeader
                className={cn(
                  'flex flex-row items-center justify-between space-x-4 p-4 rounded-t-lg',
                  ''
                )}
              >
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{language.name}</CardTitle>
                <language.icon className="h-6 w-6 text-gray-900 dark:text-white font-semibold" />
              </CardHeader>
              <CardContent className={cn('p-4 rounded-b-lg', '')}>
                <CardDescription className="text-gray-400 dark:text-gray-500">
                  {language.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;