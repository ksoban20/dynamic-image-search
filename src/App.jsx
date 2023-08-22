import { useState } from 'react';
import { dynamicSearch } from './getImages';
import PhotoList from './photos';
import SearchBar from './searchBar';
import './style.css';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const onSubmit = async (term) => {
    const result = await dynamicSearch(term);
    setPhotos(result);
  };
  return (
    <div className="app">
      <SearchBar onSubmit={onSubmit} />
      <PhotoList images={photos} />
    </div>
  );
};

export default App;
