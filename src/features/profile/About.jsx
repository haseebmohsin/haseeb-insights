import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import {
  faCss3,
  faDocker,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import './about.scss';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className='grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full'
        id='about_page'>
        {/* left section */}
        <div className='my-auto'>
          <div>
            <h1 className='mb-6'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>

            <p>
              As an ambitious front-end developer, I am seeking a position
              within a reputable IT company where I can utilize the latest
              technologies on a variety of exciting projects.
            </p>
            <br />

            <p>
              I am confident in my abilities, always seeking to learn new things
              and continuously working on improving my skills by taking on
              design problems.
            </p>
            <br />

            <p>
              As a front-end developer, I am dedicated to technology, constantly
              working to evolve my skills and stay informed of the latest
              industry developments.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className='my-auto mx-auto py-52 lg:py-0'>
          <div className='cube_spinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faDocker} color='#2B99ED' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
