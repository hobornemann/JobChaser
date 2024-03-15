import './styles/searchBar.css'

export default Search

function Search({searchTerm, onSearch, onClear, onChange}){

    return (
        <div className="searchBar">
            <label className="search-icon-and-input">
                <img src="./images/search-icon.svg" alt="" className="search-icon" />
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Write your search text here"
                    value={searchTerm}
                    onChange={onChange(e)}
                />
            </label>
            <div className="buttons">
                <button className='searchBar-button' onClick={onSearch(e)}>Search</button>
                <button className='searchBar-button' onClick={onClear(e)}>Clear</button>
            </div>
        </div>
    );
}


/* return (
    <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Sök"
            />
            <button type="submit">Sök!</button>
        </form>
        <p>{searchTerm}</p>
    </>
); */