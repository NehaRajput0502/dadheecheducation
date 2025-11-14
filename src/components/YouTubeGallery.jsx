import React, { useState, useEffect } from 'react';
import { PlayArrow, FiberManualRecord } from '@mui/icons-material';

const YouTubeGallery = ({ title, videos, maxVideos = 4 }) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.id || '');
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(videos.length / maxVideos);
  
  // Get current page videos
  const currentVideos = videos.slice(
    currentPage * maxVideos,
    (currentPage + 1) * maxVideos
  );

  // Auto-rotate videos every 8 seconds if playing
  useEffect(() => {
    if (!isPlaying || videos.length <= 1) return;
    
    const interval = setInterval(() => {
      const currentIndex = videos.findIndex(video => video.id === selectedVideo);
      const nextIndex = (currentIndex + 1) % videos.length;
      setSelectedVideo(videos[nextIndex].id);
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedVideo, videos, isPlaying]);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
    setIsPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-red-600 transform -translate-x-1/4"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our latest school events, activities, and achievements
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Main video player */}
          <div className="w-full lg:w-2/3">
            <div className="relative pt-[56.25%] bg-black">
<iframe
  src={`https://www.youtube.com/embed/H0YXy_0Z--w?autoplay=1&rel=0&modestbranding=1`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="absolute inset-0 w-full h-full"
></iframe>
              
              {/* Video overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-bold text-lg">
                  {videos.find(v => v.id === selectedVideo)?.title || ''}
                </h3>
              </div>
            </div>
            
            {/* Video navigation dots */}
            {videos.length > 1 && (
              <div className="flex justify-center space-x-2 p-4 bg-gray-50">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video.id)}
                    className={`p-1 rounded-full transition-all ${
                      selectedVideo === video.id 
                        ? 'text-red-600 scale-125' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    aria-label={`Select video ${index + 1}`}
                  >
                    <FiberManualRecord fontSize="small" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Video thumbnails list */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="p-4 bg-gray-800 text-white">
              <h3 className="font-semibold flex items-center">
                <PlayArrow className="mr-2" />
                Video Gallery
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto max-h-96">
              {currentVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`flex items-start p-4 cursor-pointer transition-all duration-300 group ${
                    selectedVideo === video.id 
                      ? 'bg-red-50 border-l-4 border-red-600' 
                      : 'border-l-4 border-transparent hover:bg-gray-50'
                  }`}
                  onClick={() => handleVideoSelect(video.id)}
                >
                  <div className="relative flex-shrink-0 mr-4">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-24 h-14 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayArrow className="text-white text-sm" />
                    </div>
                    {selectedVideo === video.id && (
                      <div className="absolute top-0 left-0 w-full h-full bg-red-600/20 border border-red-600"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate transition-colors ${
                      selectedVideo === video.id ? 'text-red-700' : 'text-gray-800'
                    }`}>
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {video.date || 'Recent video'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center p-3 bg-gray-100 border-t">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 0}
                  className="px-3 py-1 text-sm rounded disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Previous
                </button>
                
                <span className="text-sm text-gray-600">
                  Page {currentPage + 1} of {totalPages}
                </span>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                  className="px-3 py-1 text-sm rounded disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Want to see more of our school activities?
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md">
            Visit Our YouTube Channel
          </button>
        </div>
      </div>
    </section>
  );
};

// Default props for example content
YouTubeGallery.defaultProps = {
  title: "Featured Videos",
  videos: [
    { id: "dQw4w9WgXcQ", title: "Krishna Sudama Milan Play 2024", date: "March 15, 2023" },
    { id: "LsPizyBotr4", title: "Science Fair Exhibition", date: "February 8, 2023" },
    { id: "dQw4w9WgXcQ", title: "Sports Day Highlights", date: "January 20, 2023" },
    { id: "dQw4w9WgXcQ", title: "Student Art Showcase", date: "December 12, 2022" },
    { id: "dQw4w9WgXcQ", title: "Teacher's Day Special", date: "September 5, 2022" },
    { id: "dQw4w9WgXcQ", title: "School Annual Function", date: "August 30, 2022" },
    { id: "dQw4w9WgXcQ", title: "Educational Field Trip", date: "July 15, 2022" },
    { id: "dQw4w9WgXcQ", title: "Republic Day Celebration", date: "January 26, 2022" },
  ]
};

export default YouTubeGallery;