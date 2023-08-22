import './style.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
        <button type="submit" onClick={handleFormSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
