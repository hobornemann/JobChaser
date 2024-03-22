import Main from '../components/Main'

export default HomePage;


function HomePage({jobs, feedback}) {

  return (
    <>
      <Main
        jobs={jobs}
        feedback={feedback}
      />
    </>
  );
}


/*
import Header from '../components/Header'
import JobsList from '../components/JobsList'
import Feedback from "../components/Feedback"
import Footer from '../components/Footer' 
 */

/* 
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
*/