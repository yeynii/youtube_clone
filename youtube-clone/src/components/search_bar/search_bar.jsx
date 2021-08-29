import React from "react";
import "./search_bar.css";

const SearchBar = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const searchInput = inputRef.current.value;
    props.onSearch(searchInput);
  };

  return (
    <form className="search-form" ref={formRef} onSubmit={onSubmit}>
      <a href=".">
        <i className="fab fa-youtube"></i>
      </a>
      <input
        className="search-input"
        type="text"
        ref={inputRef}
        placeholder="검색"
      />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
