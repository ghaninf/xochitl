'use client'

import { useEffect } from 'react';

const ScrollEffect = ({ page }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 50 && (page === '/' || page === 'xochitl')) {
        document.getElementById('navbar').style.backgroundColor = 'rgba(51, 65, 85, 0.8)';
      } else if (scrollTop >= 50 && (page !== '/' || page !== 'xochitl')) {
        document.getElementById('navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      } else {
        document.getElementById('navbar').style.backgroundColor = 'transparent';
      }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return null;
};

export default ScrollEffect;
