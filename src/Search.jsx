import { useRef } from 'react';
import './styles/search.css';
export default Search;


function Search({ searchTerm, onSearch, onClear, onChange }) {
    const searchButton = useRef(null);

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            searchButton.current.click(); // Trigger button click
        }
    }

    return (
        <div className="searchBar">
            <label className="search-icon-and-input">
                <img src="./images/search-icon.svg" alt="" className="search-icon" />
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Write your search text here"
                    value={searchTerm}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
            <div className="buttons">
                <button ref={searchButton} className='searchBar-button' onClick={onSearch}>Search</button>
                <button className='searchBar-button' onClick={onClear}>Clear</button>
            </div>
        </div>
    );
}




/* 


import {useRef} from 'react'
import './styles/search.css'

export default Search

const searchButton = useRef{null}

function Search({searchTerm, onSearch, onClear, onChange}){

    function handleKeyDown (event){
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            searchButton.current.click(); // Trigger button click
        }
    }
    

    return (
        <div className="searchBar">
            <label className="search-icon-and-input">
                <img src="./images/search-icon.svg" alt="" className="search-icon" />
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Write your search text here"
                    value={searchTerm}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
            <div className="buttons">
                <button ref="searchButton" className='searchBar-button' onClick={onSearch}>Search</button>
                <button className='searchBar-button' onClick={onClear}>Clear</button>
            </div>
        </div>
    );
} */
