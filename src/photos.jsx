import './style.css';

import DisplayedImages from './displayedImages';

const PhotoList = ({ images }) => {
  const renderedPhotos = images.map((image) => {
    return <DisplayedImages key={image.id} image={image} />;
  });

  return <div className="photo-list">{renderedPhotos}</div>;
};

export default PhotoList;
