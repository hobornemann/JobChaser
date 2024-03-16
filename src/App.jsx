import { useState, useEffect } from 'react';
import Header from './components/Header'
import Loader from './components/Loader'
import Footer from './components/Footer'
import JobCard from './components/JobCard'
import './App.css'

export default App



function App() {

  const [allJobs, setAllJobs] = useState([])
  const [allJobsAsStrings, setAllJobsAsStrings] = useState([])
  const [jobs, setJobs] = useState([])
  const [feedback, setFeedback] = useState('Loading data...')
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    // Denna kod kommer köras efter mount (initiala renderingen)
    const fetchJobs = async () => {
      try {
          /*const response = await fetch('https://jsonplaceholder.typicode.com/posts');*/
          const response = await fetch('./jsons/jobs.json');

          if (!response.ok) {
            setFeedback("The jobs list cannot be loaded. Please try again later.")
            throw new Error('Failed to fetch');
          }
          const jobsFromFetch = await response.json();
          setAllJobs(jobsFromFetch);
          setJobs(jobsFromFetch);
      } catch (error) {
        console.log(error.message)
        console.error('Error fetching jobs');
      }
    };
  
    setTimeout(()=> {
      fetchJobs();
    },1000)  
  }, []);   // dependency-array inkluderas så att funtionen bara körs vid mount 
  
  function handleChange(e) {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  function handleSearch(e){
    e.preventDefault();
    const searchedJobs = allJobs.filter(job => {
      return searchNestedObject(job, searchTerm)
    })
    setJobs(searchedJobs);
    !searchedJobs.length && setFeedback('Sorry, no jobs matched your search text.')
  }

  function handleClear(e){
    e.preventDefault();
    setJobs(allJobs)
    setSearchTerm('')
  }

  function searchNestedObject(obj, searchString) {
    return searchRecursive(obj);
    function searchRecursive(obj) {
      for (let key in obj) {
        const value = obj[key];

        if (typeof value === 'string' && value.toLowerCase().includes(searchString.toLowerCase())) {
          return true; 
          // Return true if match found in current property value
        } 
        else if (typeof value === 'object' && value !== null) {
          // Check if the property value is a non-null object (i.e. a nested object)
          // If yes, recursively search through it and check if the return value of 
          // the searchRecursive function is true, i.e. that a searchTerm-match has been found in the nested object.  
          if (searchRecursive(value)) {
            return true; 
            // since a searchTerm-match has been found in the nested object, exit the searchNestedObject-function by returning true
          }
        }  
      }
      return false; // Return false if no match found anywhere in object
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
        {jobs.length>0 && 
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
        {(jobs.length===0) && <Loader feedback={feedback} />}
      </main>
      <Footer />
    </div>
  );

}

