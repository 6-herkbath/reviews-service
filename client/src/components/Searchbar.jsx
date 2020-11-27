import React from 'react';
import {
  SearchBarContainer,
  MagnifyIcon,
  Svg,
  SearchBarItself,
  ReviewsSearchInput,
  SearchInputHouse,
  SearchField,
} from './SearchBarStyling';

const Searchbar = ({ searchTerm, handleInput }) => (
  <div>
    <SearchBarContainer>
      <SearchBarItself>
        <MagnifyIcon>
          <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
            <g fill="none">
              <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
            </g>
          </Svg>
        </MagnifyIcon>
        <ReviewsSearchInput>
          <SearchInputHouse>
            <SearchField
              placeholder="Search reviews"
              value={searchTerm}
              onChange={handleInput}
            />
          </SearchInputHouse>
        </ReviewsSearchInput>
      </SearchBarItself>
    </SearchBarContainer>
  </div>
);

export default Searchbar;
