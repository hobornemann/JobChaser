import { useState, useEffect } from 'react';
import Header from './Header'
import Loader from './Loader'
import Footer from './Footer'
import JobCard from './JobCard';

import './App.css'
/* import { getJobs } from './jobs'; */

export default App



function App() {

/*   const [isLoading, setIsLoading] = useState(null) */
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
            const response = await fetch('../jsons/jobs.json');
            if (!response.ok) {
              setFeedback("The jobs list cannot be loaded. Please try again later.")
              throw new Error('Failed to fetch');
            }
            const data = await response.json();
            // console.log(data);
            setAllJobs(data.jobs);
            setJobs(allJobs);
            // set timer med await  TODO:
            setTimeout(function(){},2000);
        } catch (error) {
            console.error('Error fetching jobs');
        }
    };
  
  fetchJobs();
  }, []);   // 
  

  function handleChange(e) {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  function handleSearch(e){
    e.preventDefault();
    // använd searchTerm för att filtrera och sätta resultatet till jobs
    const searchedJobs = jobs.filter(job => {
      searchNestedObject(job, searchTerm)
    })
    setJobs(searchedJobs);
  }

  function handleClear(e){
    e.preventDefault();
    setJobs(allJobs)
  }

  function searchNestedObject(obj, searchString) {
    // Start the recursive search
    searchRecursive(obj);
    function searchRecursive(obj) {
      for (let key in obj) {
        const value = obj[key];
        // Check if the property value is an object (nested object)
        if (typeof value === 'object' && value !== null) {
          // If it's an object, recursively search through it
          searchRecursive(value);
        } else if (typeof value === 'string' && value.toLowerCase().includes(searchString.toLowerCase())) {
          return obj;
        }
      }
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

