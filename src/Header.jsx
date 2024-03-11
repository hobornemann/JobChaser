import SearchBar from './SearchBar'
import './styles/header.css'

export default Header

function Header() {
    return (
      <header>
        <img src="./images/jobChaser-logo.svg" alt="" className="jobChaser-logo" />
        {/* <h1 className='heading'>&nbsp;JobChaser</h1> */}
        <SearchBar />
      </header>
    );
}