import React from 'react';

const SearchBar = () => {
  console.log('searchbar');
  return (
    <header className="search-bar">
       <i className="fab fa-youtube"></i>
       <input className="search-input" type="text" />
       <button className="search-button">
        <i className="fas fa-search"></i>
       </button>
    </header>
  );
}

export default SearchBar;