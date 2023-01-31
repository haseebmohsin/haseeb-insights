import { useEffect } from 'react';
import './portfolio.scss';

function ProjectCardModal({ children, isOpen, toggleModal }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center'
      style={{ zIndex: 99 }}>
      <div
        className='w-11/12 md:w-4/5 lg:w-1/2 h-5/6 shadow-lg overflow-y-auto relative'
        id='modal_body'>
        <button
          className='absolute top-0 right-0 px-5 py-2 font-semibold bg-red-700 text-white hover:bg-red-600'
          onClick={toggleModal}
          style={{ zIndex: 999 }}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
export default ProjectCardModal;
