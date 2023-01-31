import { useEffect, useState } from 'react';
import ProjectCardModal from './ProjectCardModal';

function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, project.images.length]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className='mx-auto max-w-md shadow-lg rounded-lg'
        onClick={toggleModal}
        id='card'>
        <img
          className='carousel_image'
          src={project.images[currentIndex]}
          alt={project.name}
        />

        <hr className='h-2 bg-theme-secondary' />

        <div className='px-6 py-4 text-theme-white'>
          <h1 className='text-2xl font-medium text-center'>{project.name}</h1>
          <p className='text-base mt-2'>
            {project.description.substring(0, 150) + '...'}
          </p>
        </div>

        <h1 className='text-2xl font-medium text-center'>Tech Stack</h1>
        <hr className='h-1 w-12 rounded-lg mx-auto bg-theme-primary' />

        <p className='py-6 text-center text-theme-white'>
          {project.techStack.toUpperCase()}
        </p>
      </div>
      {isModalOpen && (
        <ProjectCardModal isOpen={isModalOpen} toggleModal={toggleModal}>
          <div className='bg-theme-secondary pb-12'>
            <img
              className='modal_carousel_image'
              src={project.images[currentIndex]}
              alt={project.name}
            />

            <hr className='h-1 bg-theme-secondary' />

            <div className='px-6 py-4'>
              <h1 className='text-4xl font-medium text-center'>
                {project.name}
              </h1>

              <hr className='h-1 w-12 my-4 rounded-lg mx-auto bg-theme-primary' />

              <p
                className='text-base mt-2 text-theme-lightGray'
                id='modal_description'
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            <h1 className='text-2xl font-medium text-center'>Tech Stack</h1>
            <hr className='h-1 w-12 mt-2 rounded-lg mx-auto bg-theme-primary' />

            <p className='py-6 text-center text-theme-white'>
              {project.techStack.toUpperCase()}
            </p>

            {project.link && (
              <a
                href={project.link}
                target='_blank'
                className='font-semibold text-lg block mx-auto text-center text-theme-white'
                rel='noreferrer'>
                <span className='py-2 px-4 border border-theme-primary'>
                  Take a Visit
                </span>
              </a>
            )}
          </div>
        </ProjectCardModal>
      )}
    </>
  );
}

export default ProjectCard;
