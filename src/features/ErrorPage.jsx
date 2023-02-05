import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-5xl mb-12'>Oops!</h1>
          <p className='text-lg mb-8'>Sorry, an error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
