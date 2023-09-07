'use client'

import { useEffect } from 'react';

const ScrollEffect = ({ page }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 50 && (page === '/' || page === 'xochitl')) {
        document.getElementById('navbar').style.backgroundColor = '#0E3179';
      } else if (scrollTop >= 50 && (page !== '/' || page !== 'xochitl')) {
        document.getElementById('navbar').style.backgroundColor = '#ffffff';
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
