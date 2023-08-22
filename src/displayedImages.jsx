import React from 'react';
import './style.css';

const DisplayedImages = ({ image }) => {
  return (
    <div>
      <a href={image.url} target="_blank">
        <img src={image.src.portrait} alt={image.alt} />
      </a>
    </div>
  );
};

export default DisplayedImages;
