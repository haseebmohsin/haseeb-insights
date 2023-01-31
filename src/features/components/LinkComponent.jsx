import { Link } from 'react-router-dom';

function LinkComponent(props) {
  const { children, ...rest } = props;

  return (
    <>
      <Link className='whitespace-nowrap text-gray-600 rounded ' {...rest}>
        {children}
      </Link>
    </>
  );
}

export default LinkComponent;
