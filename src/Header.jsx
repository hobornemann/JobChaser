import SearchBar from './SearchBar'
import './styles/header.css'

export default Header

function Header() {
    return (
      <header>
        <h1>&nbsp;JobChaser</h1>
        <SearchBar/>
      </header>
    );
}