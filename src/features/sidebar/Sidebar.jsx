import fullLogo from '../../assets/images/haseeb-insights-logos/haseeb-insights-logo_transparent.png';
import SidebarNavigationMenu from './SidebarNavigationMenu';
import './sidebar.scss';

export default function Sidebar() {
  // const [isNavbarLarge, setIsNavbarLarge] = useState(false);

  const handleToggleSidebar = () => {
    const sidebarContainer = document.querySelector('#sidebar_container');
    const navbarContainer = document.getElementById('navigation_container');
    const sidebarToggler = document.getElementById('sidebar_toggler');

    if (!sidebarToggler.classList.contains('active') && !navbarContainer.classList.contains('active')) {
      sidebarContainer.classList.add('expanded');
      sidebarToggler.classList.add('active');
      navbarContainer.classList.add('active');
    } else {
      sidebarContainer.classList.remove('expanded');
      sidebarToggler.classList.remove('active');
      navbarContainer.classList.remove('active');
    }
  };

  return (
    <>
      <aside aria-label='Sidebar'>
        <div id='sidebar_container'>
          {/* Brand */}
          <div id='logo_container'>
            <img src={fullLogo} alt='logo' id='logo' />
          </div>

          {/* Navigation Menu Component */}
          <div id='navigation_container'>
            <SidebarNavigationMenu />
          </div>

          {/* Sidebar Toggler */}
          <div id='sidebar_toggler_container' onClick={handleToggleSidebar}>
            <div id='sidebar_toggler'></div>
          </div>
        </div>
      </aside>
    </>
  );
}
