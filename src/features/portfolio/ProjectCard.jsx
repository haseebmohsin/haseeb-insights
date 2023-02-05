import { useEffect, useState } from 'react';
import ProjectCardModal from './ProjectCardModal';

function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImageCurrentIndex, setModalImageCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    setModalImageCurrentIndex((prevValue) => (prevValue + project.images.length - 1) % project.images.length);
  };

  const handleNext = () => {
    setModalImageCurrentIndex((prevValue) => (prevValue + 1) % project.images.length);
  };

  return (
    <>
      <div className='mx-auto max-w-md shadow-2xl rounded-lg' onClick={toggleModal} id='card'>
        <div className='' id='card_header'>
          <img className='carousel_image' src={project.images[currentIndex]} alt={project.name} />
        </div>
        <div className='px-6 py-4 text-theme-white text-center' id='card_body'>
          <h1 className='text-2xl font-medium'>{project.name}</h1>
          <p className='text-base mt-2'>{project.description.substring(0, 150) + '...'}</p>
        </div>

        <div className='border-b border-gray-50' id='card_footer'>
          <h1 className='text-2xl font-medium text-center'>Tech Stack</h1>

          <hr className='h-1 w-12 my-2 rounded-lg mx-auto bg-theme-primary' />

          <p className='py-2 text-center text-theme-white'>{project.techStack.toUpperCase()}</p>
        </div>
      </div>

      {isModalOpen && (
        <ProjectCardModal isOpen={isModalOpen} toggleModal={toggleModal}>
          <div className='w-11/12 md:w-4/5 lg:w-1/2' id='modal'>
            <div id='modal_header'>
              <button className='px-5 py-3 font-semibold bg-red-700 text-white hover:bg-red-600' onClick={toggleModal}>
                X
              </button>
            </div>

            <div id='modal_body'>
              <div id='modal_slider'>
                <img className='modal_carousel_image' src={project.images[modalImageCurrentIndex]} alt={project.name} />
                <button className='prev' onClick={handlePrev}>
                  &#60;
                </button>
                <button className='next' onClick={handleNext}>
                  &#62;
                </button>
              </div>

              <div className='px-6 py-4' id='modal_body_description'>
                <h1 className='text-4xl font-medium text-center'>{project.name}</h1>

                <hr className='h-1 w-12 my-4 rounded-lg mx-auto bg-theme-primary' />

                <p
                  className='text-base mt-2 text-theme-lightGray text-justify'
                  id='modal_description'
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            </div>

            <div className='pt-2 pb-4' id='modal_footer'>
              <h1 className='text-xl font-medium text-center'>Tech Stack</h1>
              <hr className='h-1 w-12 mt-1 rounded-lg mx-auto bg-theme-primary' />

              <p className='py-4 text-center text-theme-white'>{project.techStack.toUpperCase()}</p>

              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  className='font-semibold text-lg block mx-auto text-center text-theme-white'
                  rel='noreferrer'>
                  <span className='py-2 px-4 border border-theme-primary'>Take a Visit</span>
                </a>
              )}
            </div>
          </div>
        </ProjectCardModal>
      )}
    </>
  );
}

export default ProjectCard;
