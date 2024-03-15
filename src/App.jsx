import { useState, useEffect } from 'react';
import Header from './Header'
import Loader from './Loader'
import Footer from './Footer'
import JobCard from './JobCard'

import './App.css'

export default App



function App() {

/*   const [isLoading, setIsLoading] = useState(null) */
  const [allJobs, setAllJobs] = useState([])
  const [allJobsAsStrings, setAllJobsAsStrings] = useState([])
  const [jobs, setJobs] = useState([])
  const [feedback, setFeedback] = useState('')
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    // Denna kod kommer köras efter mount (initiala renderingen)
    const fetchJobs = async () => {
        try {
            setFeedback('Loading data...')
            /*const response = await fetch('https://jsonplaceholder.typicode.com/posts');*/
            const response = await fetch('./src/jsons/jobs.json');

            //console.log("response: ",response);
            if (!response.ok) {
              //console.log("response is not OK")
              setFeedback("The jobs list cannot be loaded. Please try again later.")
              throw new Error('Failed to fetch');
            }
            const jobsFromFetch = await response.json();
            //console.log("data:",jobsFromFetch);
            setAllJobs(jobsFromFetch);
            setJobs(jobsFromFetch);
            //console.log("jobs: ",jobs)

            // set timer med await  TODO:
            // setTimeout(function(){},1000);
        } catch (error) {
          console.log(error.message)
          console.error('Error fetching jobs');
        }
    };
  
  fetchJobs();
  }, []);   // 
  
  function handleChange(e) {
    e.preventDefault();
    setSearchTerm(e.target.value)
  
   /*  useEffect(() => {
      console.log("searchTerm in handleChange wrapped with useEffect", searchTerm);
    }, [searchTerm]); */

      console.log("searchTerm in handleChange",searchTerm)
  }

  function handleSearch(e){
    e.preventDefault();
    const searchedJobs = allJobs.filter(job => {
      return searchNestedObject(job, searchTerm)
    })
    setJobs(searchedJobs);
  }

  function handleClear(e){
    e.preventDefault();
    setSearchTerm('')
    setJobs(allJobs)
  }

  function searchNestedObject(obj, searchString) {
    // Start the recursive search
    return searchRecursive(obj);
  
    function searchRecursive(obj) {
      for (let key in obj) {
        const value = obj[key];
        // Check if the property value is an object (nested object)
        if (typeof value === 'object' && value !== null) {
          // If it's an object, recursively search through it
          if (searchRecursive(value)) {
            return true; // Return true if match found in nested object
          }
        } else if (typeof value === 'string' && value.toLowerCase().includes(searchString.toLowerCase())) {
          return true; // Return true if match found in current property value
        }
      }
      return false; // Return false if no match found in object
    }
  }


  return (
    <div className='jobChaserContainer'>
      <Header 
        searchTerm={searchTerm}
        onChange={handleChange}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <main> 
        {!jobs && <Loader feedback={feedback} />}
        {jobs && 
          jobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                company={job.company}
                logoUrl={job.logo}
                position={job.position}
                role={job.role}
                level={job.level}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                languages={job.languages}
                tools={job.tools}
              />
            );
          })
        }  
      </main>
      <Footer />
    </div>
  );

}

