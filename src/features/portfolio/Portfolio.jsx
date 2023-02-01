import { useEffect, useState } from 'react';
import { projectsList } from './projectsList';
import ProjectCard from './ProjectCard';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='pb-12 lg:pr-20' id='projects_page'>
      <div className='mb-8 text-center' id='projects_page_intro'>
        <h1 className='text-5xl mb-6'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <p>
          I have a diverse portfolio of projects that demonstrate my skills and
          expertise. My notable projects highlight my ability to work in
          front-end technologies. I am proud of my contributions and constantly
          seeking new opportunities to challenge myself.
        </p>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full'>
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
