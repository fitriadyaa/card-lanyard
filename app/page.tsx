'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    if (!container || !cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      const angle = Math.atan2(mouseY - container.clientHeight / 2, mouseX - container.clientWidth / 2);
      const degree = angle * (180 / Math.PI);
      cursor.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center p-4">
      <div className="relative" ref={containerRef}>
        <motion.div
          className="w-64 h-96 bg-blue-600 rounded-xl shadow-lg overflow-hidden relative cursor-none"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Badge hole */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-blue-100 rounded-b-full"></div>

          {/* Content */}
          <div className="p-6 text-white h-full flex flex-col relative z-10">
            {/* Top section */}
            <div className="flex justify-between items-start mb-12">
              <motion.div
                className="text-2xl font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                SE 
              </motion.div>
              <motion.div
                className="text-xl font-bold bg-white text-blue-600 px-2 rounded"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                2024
              </motion.div>
            </div>

            {/* Middle section */}
            <div className="flex-grow">
              <motion.h2
                className="text-4xl font-bold mb-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Fitria Widyani
              </motion.h2>
              <motion.p
                className="text-xl mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Software Engineer
              </motion.p>
            </div>

            {/* Bottom section */}
            <motion.div
              className="mt-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm mb-2">Mobile, UI/UX, AI Enthusiast</p>
              <p className="text-sm flex items-center">
                <span className="mr-2">⚡</span> CLICK TO PORTFOLIO
              </p>
            </motion.div>
          </div>

          {/* Watermark */}
          <div className="absolute top-4 right-4 text-6xl font-bold text-blue-500 opacity-10">N</div>
        </motion.div>

        {/* Circular Cursor */}
        <div 
          ref={cursorRef}
          className="absolute pointer-events-none"
          style={{ 
            width: '100px', 
            height: '100px', 
            display: isHovered ? 'block' : 'none',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path 
              id="curve" 
              d="M 50 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" 
              fill="transparent"
            />
            <text width="100">
              <textPath xlinkHref="#curve" className="text-xs font-bold fill-white">
                LETS WORK •  TOGETHER  •  HIRE  •  ME  •  
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}