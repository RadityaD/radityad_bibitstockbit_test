import React, { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { func, number, string } from 'prop-types';
import { SearchContainer } from './style';

const SearchBar = ({ onSearch, debounce, keyword }) => {
  const [searchVal, setSearchVal] = useState(keyword || '');
  const debouncedValue = useDebounce(searchVal, debounce);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue);
    }
  }, [onSearch, debouncedValue]);

  return (
    <SearchContainer>
      <input
        placeholder="Search Keyword"
        value={searchVal}
        onChange={(e) => handleOnChange(e)}
        data-testid="searchbar"
      />
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  debounce: number,
  keyword: string,
  onSearch: func.isRequired,
};

SearchBar.defaultProps = {
  debounce: 1000,
  keyword: '',
};

export default SearchBar;
