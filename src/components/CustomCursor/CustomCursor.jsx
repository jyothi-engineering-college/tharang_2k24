import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null); // Use ref to directly access the cursor element
  const requestRef = useRef(); // Ref to hold the requestAnimationFrame ID
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0; // Mouse X position
    let mouseY = 0; // Mouse Y position
    let cursorX = 0; // Cursor X position (lagging behind)
    let cursorY = 0; // Cursor Y position (lagging behind)

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseEnter = () => {
      setIsHovered(true); // Set hovered state to true
    };

    const handleMouseLeave = () => {
      setIsHovered(false); // Set hovered state to false
    };

    const animateCursor = () => {
      // Interpolation to make the movement smoother (0.1 can be adjusted for smoothness)
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      // Apply the new position
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      // Call animateCursor again on the next frame
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    // Adding hover event listeners
    document.querySelectorAll('a, button, .hover-target').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    animateCursor(); // Start the animation loop

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current); // Cleanup the animation frame
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovered ? '30px' : '10px', // Increase size when hovered
        height: isHovered ? '30px' : '10px',
        borderRadius: '50%',
        pointerEvents: 'none', // Ensure it doesn't block interactions
        zIndex: 9999,
        transform: 'translate(-50%, -50%)', // Center the cursor
        transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease, background-color 0.3s ease', // Smooth transitions for effects
        backgroundColor: isHovered ? 'rgba(239, 255, 251, 0.6)' : '#EFFFFB', // Change opacity when hovered
        willChange: 'transform, width, height, background-color', // Optimize for smoother rendering
      }}
    />
  );
};

export default CustomCursor;
