const sliderСarousel = (width, maxWidth, wrapper, block, targetLeft, targetRight, leftArrowSelector, rightArrowSelector, styleDisplay = 'block', position = 0) => {
  const sliderWrapper = document.querySelector(wrapper),
    sliderBlock = sliderWrapper.querySelector(block),
    leftArrow = document.getElementById(leftArrowSelector),
    rightArrow = document.getElementById(rightArrowSelector);

  sliderWrapper.addEventListener('click', event => {
    let target = event.target;

    if(target.matches(targetLeft)) {
      if (position >= 0) {
        sliderBlock.style.transform = `translateX(${-maxWidth}px)`;
        position = -maxWidth;
      }

      sliderBlock.style.transform = `translateX(${position += width}px)`;
    } else if (target.matches(targetRight)) {
      sliderBlock.style.transform = `translateX(${position -= width}px)`;
    }

    if(leftArrow && rightArrow) {
      if (position >= 0) {
        leftArrow.style.display = 'none';
      } else {
        leftArrow.style.display = styleDisplay;
      }
  
      if (position <= -maxWidth) {
        rightArrow.style.display = 'none';
      } else if (position >= -maxWidth) {
        rightArrow.style.display = styleDisplay;
      }
    } else {
      if(position <= -maxWidth) {
        position = 0 + width;
      }
    }
  });
}



export default sliderСarousel;