import Header from '../components/Header'
import JobsList from '../components/Main'
import Feedback from "../components/Feedback"
import Footer from '../components/Footer'

export default HomePage;

function HomePage({searchTerm, handleChange, handleSearch, handleClear, jobs, feedback}) {

  return (
    <>
        <Header 
          searchTerm={searchTerm}
          onChange={handleChange}
          onSearch={handleSearch}
          onClear={handleClear}
        />
        <main>
          {(jobs.length>0) && 
            <JobsList 
                key="1"
                jobs={jobs}
            />  
            }  
          {feedback && <Feedback feedback={feedback} />}
        </main>
        <Footer />
    </>
  );
}

