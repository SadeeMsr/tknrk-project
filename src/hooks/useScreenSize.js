import { useEffect, useState } from 'react';

export default function useScreenSize() {
  const isClient = typeof window === 'object'; // Check if window object is defined

  const [screenSize, setScreenSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Return early if running on the server
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return screenSize;
}
