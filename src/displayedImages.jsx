import React from 'react';
import './style.css';

const DisplayedImages = ({ image }) => {
  return (
    <div>
      <img src={image.src.portrait} alt={image.alt_description} />
    </div>
  );
};

export default DisplayedImages;
