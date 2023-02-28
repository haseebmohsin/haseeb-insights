import { useEffect, useState } from 'react';
import CLogo from '../../assets/images/Codesara_C_logo_transparent.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import ButtonComponent from '../components/ButtonComponent';
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ', 'H', 'a', 's', 'e', 'e', 'b'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full' id='home_page'>
        {/* left section */}
        <div className='my-auto' id='home_left_section_container'>
          <div className='mb-6'>
            <h1 className='mb-3'>
              <span className={`${letterClass} _11`}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m </span>

              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
              <br />
              <span id='job_array'>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
              </span>
            </h1>

            <p>Front End Developer | JavaScript Expert</p>
          </div>

          <div className='flex space-x-3'>
            <Link to={`/contact`}>
              <ButtonComponent outline='primary' text='primary' size='lg'>
                Let's Connect
              </ButtonComponent>
            </Link>

            <a href='/haseeb-cv.pdf' target='_blank' rel='noopener noreferrer'>
              <ButtonComponent className='text-theme-lightGray' outline='primary' size='lg'>
                Download CV
              </ButtonComponent>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className='my-auto mx-auto' id='home_right_section_container'>
          <img src={CLogo} alt='React logo' id='home_right_section_img' />
        </div>
      </div>
    </>
  );
}
