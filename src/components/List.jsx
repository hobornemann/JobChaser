import styles from './List.module.css'
import JobCard from './JobCard'

export default List


function List({jobs}) {
    return (
        <ul className={styles.list}>
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
    );
}