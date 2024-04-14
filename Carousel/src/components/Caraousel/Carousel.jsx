import { useState } from 'react';

import Item from '../Item/Item';
import content from '../../content';

const totalItems = content.length;

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleLeftSlider() {
    console.log('Left clicked');
    setCurrentSlide(prev => {
      if (prev !== 0) prev -= 1;
      else prev = totalItems - 1;
      return prev;
    });
    console.log(currentSlide);
  }

  function handleRightSlider() {
    console.log('Right Clicked');
    setCurrentSlide(prev => {
      if (prev !== totalItems - 1) prev += 1;
      else prev = 0;
      return prev;
    });
    console.log(currentSlide);
  }

  return (
    <>
      <Item
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        clickLeftArrowSlider={handleLeftSlider}
        clickRightArrowSlider={handleRightSlider}
      />
    </>
  );
}
