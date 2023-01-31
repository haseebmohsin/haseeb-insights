import { NavLink } from 'react-router-dom';

function NavLinkComponent(props) {
  const { children, ...rest } = props;

  return (
    <>
      <NavLink
        className='whitespace-nowrap text-gray-600 rounded '
        {...rest}
        style={({ isActive }) => {
          return { color: isActive ? 'yellow' : '' };
        }}>
        {children}
      </NavLink>
    </>
  );
}

export default NavLinkComponent;
