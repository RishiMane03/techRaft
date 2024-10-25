import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayArrow, Pause, VolumeOff, VolumeUp } from '@mui/icons-material'; // Import MUI icons

import Logo from "../assets/white-logo.png";

import video1 from "../videos/airpod00.mp4";
import video2 from "../videos/macbook00.mp4";
import video3 from "../videos/iphone00.mp4";

const videos = [
  { title: 'iPhone', description: 'The iPhone is a premium smartphone with advanced features and a stunning display.', src: video3, thumbnail: 'https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', page: '/iphone' },
  { title: 'AirPods', description: 'AirPods are wireless earbuds with rich sound and seamless connectivity.', src: video1, thumbnail: 'https://images.unsplash.com/photo-1611864583067-b002fdc4fa29?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', page: '/airpod' },
  { title: 'MacBook', description: 'The MacBook is a sleek, powerful laptop with a stunning display.', src: video2, thumbnail: 'https://images.unsplash.com/photo-1514826786317-59744fe2a548?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', page: '/macbook' },
];

function ExplorePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null); 

  const navigate = useNavigate();

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const selectVideo = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true); // Automatically play the new video
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video if it's currently playing
    } else {
      videoRef.current.play(); // Play the video if it's currently paused
    }
  };

  const handleBuyNow = () => {
    navigate(videos[currentIndex].page);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between bg-opacity-75 p-4 text-white z-10">
        <img src={Logo} width={200}/>
        <button 
          className='text-black bg-white h-8 px-5 hover:bg-slate-100 rounded-md'
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </nav>
      
      <video
        ref={videoRef} // Attach the ref to the video element
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        src={videos[currentIndex].src}
      />

      {/* Title and description */}
      <div className="absolute inset-0 bg-black bg-opacity-50 p-4 px-10 flex flex-col justify-end pb-56 md:justify-start md:pt-72">
        <h1 className="text-4xl md:text-6xl text-white font-bold">{videos[currentIndex].title}</h1>
        <p className='text-white w-full md:w-80'>{videos[currentIndex].description}</p>
        <div className="flex justify-center"> {/* Center the button */}
          <button 
            onClick={handleBuyNow} 
            className="absolute left-10 w-60 mt-4 bg-white text-black px-5 py-2 rounded-md hover:bg-black hover:text-white z-20" // Ensure z-index is higher
          >
            Goto {videos[currentIndex].title} Page
          </button>
        </div>
      </div>

      {/* Mute and Play/Pause buttons */}
      <div className='controls'>
        <button 
          onClick={toggleMute} 
          className="absolute right-20 bottom-12 transform -translate-x-1/2 bg-white p-2 rounded shadow hover:bg-gray-300 transition z-10 opacity-90"
        >
          {isMuted ? <VolumeUp /> : <VolumeOff />} {/* Mute/Unmute icons */}
        </button>

        <button 
          onClick={togglePlayPause} 
          className="absolute right-6 bottom-12 transform -translate-x-1/2 bg-white p-2 rounded shadow hover:bg-gray-300 transition z-10 opacity-90"
        >
          {isPlaying ? <Pause /> : <PlayArrow />} {/* Play/Pause icons */}
        </button>
      </div>

      {/* Thumbnails */}
      <div 
        className="w-96 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 p-8 
                    md:left-1/2 md:transform md:-translate-x-1/2 md:flex-row"
      >
        {videos.map((video, index) => (
          <button 
            key={index} 
            onClick={() => selectVideo(index)}
            className="bg-white rounded-lg bg-gradient-to-t from-gray-950 to-transparent"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={`w-32 h-22 rounded-lg transition-transform transform scale-125 
                ${currentIndex === index ? 'brightness-100 scale-100 border-2 border-gray-200' : 'brightness-50'} 
                hover:brightness-110 hover:scale-150 hover:shadow-lg`}
            />
          </button>
        ))}
      </div>
      
      
      {/* Black gradient effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black 
                      to-transparent z-5">
      </div>

      
    </div>
  );
}

export default ExplorePage;
