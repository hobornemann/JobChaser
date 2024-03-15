import Search from './Search'
import './styles/header.css'

export default Header

function Header({searchTerm, onSearch, onClear, onChange}) {
    return (
      <header>
        <img src="./images/jobChaser-logo.svg" alt="" className="jobChaser-logo" />
        {/* <h1 className='heading'>&nbsp;JobChaser</h1> */}
        <Search 
          searchTerm={searchTerm}
          onChange={onChange}
          onSearch={onSearch}
          onClear={onClear}
        />
      </header>
    );
}