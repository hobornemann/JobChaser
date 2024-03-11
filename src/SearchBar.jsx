import './styles/searchBar.css'

export default SearchBar


function SearchBar(){
    return (
        <div className="searchBar">
            <div className="search-icon-and-input">
                <img src="./images/search-icon.svg" alt="" className="search-icon" />
                <input type="text" className="search-input" placeholder="Write your search text here"/>
            </div>
            <div className="buttons">
                <button className='searchBar-button'>Tag 1</button>
                <button className='searchBar-button'>Clear</button>
            </div>
        </div>
    );
}