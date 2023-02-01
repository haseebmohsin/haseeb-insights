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
      {children}
    </div>
  );
}
export default ProjectCardModal;
