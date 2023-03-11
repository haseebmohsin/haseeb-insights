import NavLinkComponent from '../components/NavLinkComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SidebarNavigationMenu() {
  return (
    <>
      {/* Navigation Menu */}
      <div id='navigation_items'>
        <ul className='md:space-y-8'>
          <li>
            <NavLinkComponent to={`/`} className='text-base'>
              <FontAwesomeIcon icon={faHome} fixedWidth size='xl' />
              <span className='nav_text ml-6 text-base'>Home</span>
            </NavLinkComponent>
          </li>

          <li>
            <NavLinkComponent to={`/about`} className='text-base'>
              <FontAwesomeIcon icon={faUser} fixedWidth size='xl' />
              <span className='nav_text ml-6 text-base'>About</span>
            </NavLinkComponent>
          </li>

          <li>
            <NavLinkComponent to={`/portfolio`} className='text-base'>
              <FontAwesomeIcon icon={faSuitcase} fixedWidth size='xl' />
              <span className='nav_text ml-6 text-base'>Portfolio</span>
            </NavLinkComponent>
          </li>

          <li>
            <NavLinkComponent to={`/contact`} className='text-base'>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth size='xl' />
              <span className='nav_text ml-6 text-base'>Contact</span>
            </NavLinkComponent>
          </li>
        </ul>

        <div className='mt-12 mb-4'>
          <hr />
        </div>

        <div id='social_links_container'>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/haseeb-khan-008766211' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='2xl' />
              </a>
            </li>
            <li>
              <a href='https://github.com/haseebmohsin' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='2xl' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
