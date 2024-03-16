
import Tag from './Tag'
import styles from './JobCard.module.css';
import '../index.css'

export default JobCard

function JobCard({company, logoUrl, position, role, 
    level, postedAt, contract, location, languages, tools}){
    let languagesConcat = languages.join(", ")
    let toolsConcat = tools.join(", ")
    return(
        <div className={styles.jobCard}>
            {logoUrl? <img src={logoUrl} alt="" className="imgRound" /> : <img src='./images/jobChaser-default.svg' alt="" className="imgRound" />}
            <div className={styles.jobDescription}>
                <h2 className={styles.jobDescriptionHeading}>Job Description</h2>
                <div className={styles.jobDescriptionItems}>
                    {company && <p className={styles.jobCardInfo}><b>Company</b>: {company}</p>}
                    {position && <p className={styles.jobCardInfo}> <b>Position</b>: {position}</p>}
                    {role && <p className={styles.jobCardInfo}><b>Role</b>: {role}</p>}
                    {level && <p className={styles.jobCardInfo}><b>Level</b>: {level}</p>}
                    {postedAt && <p className={styles.jobCardInfo}><b>Posted</b>: {postedAt}</p>}
                    {contract && <p className={styles.jobCardInfo}><b>Contract</b>: {contract}</p>}
                    {location && <p className={styles.jobCardInfo}><b>Location</b>: {location}</p>}
                    {languagesConcat && <p className={styles.jobCardInfo}><b>Languages</b>: {languagesConcat}</p>}
                    {toolsConcat && <p className={styles.jobCardInfo}><b>Tools</b>: {toolsConcat}</p>}
                </div>
            </div>
            {languages && 
                languages.map((language, index) => {
                    return (
                    <Tag
                        key={index}
                        language={language}
                    />
                    );
                })
            }
        </div>
    );
}