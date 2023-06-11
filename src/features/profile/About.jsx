import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { faCss3, faNode, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
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
      <div className='grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full' id='about_page'>
        {/* left section */}
        <div className='my-auto'>
          <div>
            <h1 className='mb-6'>
              <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
            </h1>

            <p>
              As an ambitious full stack developer, I am seeking a position within a reputable IT company where I can leverage the
              latest technologies on a diverse range of exciting projects.
            </p>
            <br />

            <p>
              As a full stack developer, I am dedicated to mastering both front-end and back-end technologies, continuously
              evolving my skills and staying abreast of the latest industry developments. With expertise in the MERN stack, I am
              well-equipped to tackle challenges across the entire development process and deliver comprehensive solutions that
              drive success.
            </p>
            <br />

            <p>
              With a passion for technology and a commitment to excellence, I am ready to contribute to cutting-edge projects and
              make a positive impact as a full stack developer in a dynamic IT environment.
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
              <FontAwesomeIcon icon={faNode} color='#2BED45' />
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
