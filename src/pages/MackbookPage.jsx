import { Environment, ScrollControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import MacContainer from '../components/MacContainer';
import NavbarProducts from '../components/NavbarProducts';
import Card from '../components/Card';

const SpinnerLoader = () => {
  const { progress } = useProgress();

  return (
    <div className="loader mt-28 w-full h-full flex items-center justify-center absolute z-50 bg-opacity-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-gray-500 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
          />
        </svg>
        <div className="text-gray-500 text-sm font-semibold">
          Loading...
        </div>
      </div>
    </div>
  );
};

function MackbookPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, -10, 210]);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const handleResize = () => {
    const reloadFlag = sessionStorage.getItem('reloaded'); // Check if the page was reloaded
  
    if (window.innerWidth <= 640) {
      setCameraPosition([0, -10, 300]); // Small screen
    } else if (window.innerWidth <= 768) {
      setCameraPosition([0, -10, 260]); // Tablet screen
    } else {
      setCameraPosition([0, -10, 220]); // Medium and large screens
    }
  
    if (!reloadFlag) {
      // Check for screen sizes that require a reload
      if (window.innerWidth === 640 || window.innerWidth === 768) {
        sessionStorage.setItem('reloaded', 'true'); // Set flag to indicate the page has reloaded
        window.location.reload(); // Reload the page
      }
    }
  };
  
  // Reset the reload flag if the screen size changes beyond the breakpoints
  const handleWindowResize = () => {
    if (window.innerWidth > 768 || window.innerWidth < 640) {
      sessionStorage.removeItem('reloaded'); // Remove flag if the user resizes beyond 640px or 768px
    }
  };
  
  useEffect(() => {
    // Set initial camera position
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleWindowResize);
  
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  

  return (
    <div className='macbookPage'>
      <NavbarProducts />
      <div className="threeDModel relative w-screen h-screen flex flex-col items-center justify-center">
        
        <div className='absolute flex flex-col items-center top-10 left-1/2 -translate-x-1/2'>
          <h5 className={`font-bold ${isSmallScreen ? 'text-xl' : 'text-2xl'}`}>Try scrolling!</h5>
          <h3 className={`masked ${isSmallScreen ? 'text-6xl' : 'text-8xl'} tracking-tighter font-[700]`}>macbook</h3>
          <p className={`text-gray-400 ${isSmallScreen ? 'text-4xl' : 'text-5xl'} font-semibold mt-1 text-center`}>
            Mind-blowing.
          </p>
          <p className={`text-gray-400 ${isSmallScreen ? 'text-4xl' : 'text-5xl'} font-semibold text-center`}>
            Head-turning.
          </p>
          <p className={`mt-3 text-gray-700 ${isSmallScreen ? 'text-sm' : 'text-base'} text-center w-3/4`}>
            Sleek design, powerful performance, and seamless integration.
          </p>
        </div>     

        <div className="mac3DModel relative w-full h-full">
          {!isLoaded && <SpinnerLoader />} {/* Spinner inside the 3D model area */}
          <Canvas
            className='mac3DModelCanvas scrollControler -mt-3'
            camera={{ 
              fov: 12, 
              position: cameraPosition 
            }}
            onCreated={() => setIsLoaded(true)} // Hide loader when model is fully loaded
          >
            <Environment files={[ 
              'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
            ]}/>
            <ScrollControls pages={2}>
              <MacContainer />
            </ScrollControls>
          </Canvas>
        </div>
      </div>

      
      <div className="w-full min-h-screen -mt-10">
        <div className='bg-[#F4F4F7] p-24 relative overflow-hidden'>
          <h1 className={`text-[#1D1D1F] font-semibold ${isSmallScreen ?' text-3xl' : 'text-5xl'}`}>Explore the line-up.</h1>
          <div className='relative pt-10'>
          </div>
            <Card productName="mac" />
        </div>
      </div>
    </div>
  );
}

export default MackbookPage;
