
import Header from './Header'
import Footer from './Footer'
import JobCard from './JobCard';
import './App.css'
import { getJobs } from './jobs';

function App() {

  const jobs = getJobs()
/*   const jobs = "" */
  if(jobs){
    return (
      <div className='jobChaserContainer'>
        <Header />
        <main>        
          {jobs.map((job) => {
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
          })}
        </main>
        <Footer />
      </div>
    );
  } else {
    return(
      <div className='jobChaserContainer'>
      <Header />
      <main>        
        <p>The jobs list cannot be loaded. Please try again later.</p>
      </main>
      <Footer />
    </div>
    )
    
  }
}

export default App
