import styles from './Main.module.css'
import JobCard from './JobCard'


export default Main



function Main({jobs}) {
    return (
        <section className='mainContainer'> 
            <ul className={styles.jobsList}>
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
            </ul>
        </section>
    );
}