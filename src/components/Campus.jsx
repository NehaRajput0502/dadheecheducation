import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import 'react-lazy-load-image-component/src/effects/blur.css';

Modal.setAppElement('#root');

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const campusImages = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Dadheech_High_School%2C_Bulandshahr.JPG',
    'https://wehco.media.clients.ellingtoncms.com/img/photos/2015/09/09/72682081_Dadheech-High-File_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d',
    'https://media.tegna-media.com/assets/KFSM/images/39096167-e937-4126-a551-0e539a9e975b/39096167-e937-4126-a551-0e539a9e975b_1920x1080.jpg',
    'https://har-bernhs.weebly.com/uploads/2/6/5/7/26574828/261266692.jpg',
    'https://cmsv2-assets.apptegy.net/uploads/2600/file/206293/3c262193-675a-4505-a71d-77fc6762c718.jpeg',
    'https://Dadheecheducation.com/wp-content/uploads/2022/11/INFRASTRUCTURE-1.jpg',
  ];

  const campusVideos = [
    'https://www.youtube.com/embed/FUSJkqaHgYk?si=Nv40Vzc_Y4gA_7aO',
    'https://www.youtube.com/embed/SxoVEOt_muA?si=J72T9TXqAzM9Ob6P',
  ];

  const openImageModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % campusImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(campusImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + campusImages.length) % campusImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(campusImages[prevIndex]);
  };

  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto text-center px-4">
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-red-600">Campus Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {campusImages.map((imageUrl, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300 interactive-card"
                onClick={() => openImageModal(imageUrl, index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openImageModal(imageUrl, index)}
                aria-label={`View campus image ${index + 1}`}
              >
                <img
                  src={imageUrl}
                  alt={`Campus Image ${index + 1}`}
                  className="w-full h-40 md:h-48 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 opacity-0 hover:opacity-100 transition duration-300">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-red-600">Campus Video Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {campusVideos.map((videoUrl, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 interactive-card"
                onClick={() => openVideoModal(videoUrl)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openVideoModal(videoUrl)}
                aria-label={`Play campus video ${index + 1}`}
              >
                <div className="h-48 md:h-64">
                  <iframe
                    src={videoUrl}
                    title={`Campus Video ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 opacity-0 hover:opacity-100 transition duration-300">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeImageModal}
          contentLabel="Enlarged Image"
          className="modal flex flex-col items-center bg-dark bg-opacity-25 rounded-lg justify-center"
          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged Campus Image"
                className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-2 right-2 cursor-pointer text-white text-3xl bg-gray-700 bg-opacity-75 rounded-full p-1"
                aria-label="Close image"
              >
                <Cancel style={{ fontSize: '2rem' }} />
              </button>
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2" aria-label="Previous image">
                &#10094;
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2" aria-label="Next image">
                &#10095;
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={!!selectedVideo}
          onRequestClose={closeVideoModal}
          contentLabel="Video Player"
          className="modal flex flex-col items-center bg-dark bg-opacity-25 rounded-lg justify-center"
          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <iframe
                src={selectedVideo}
                title="Campus Video"
                className="w-full h-64 md:h-96 rounded-xl"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeVideoModal}
                className="absolute top-2 right-2 cursor-pointer text-white text-3xl bg-gray-700 bg-opacity-75 rounded-full p-1"
                aria-label="Close video"
              >
                <Cancel style={{ fontSize: '2rem' }} />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Campus;