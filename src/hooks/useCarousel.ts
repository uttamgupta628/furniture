import { useState } from 'react';

export const useCarousel = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goTo = (index: number) => {
    setCurrentSlide(index);
  };

  return { currentSlide, next, prev, goTo };
};