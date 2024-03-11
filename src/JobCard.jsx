
import './styles/jobCard.css'
import './index.css'

export default JobCard

function JobCard({company, logoUrl, position, role, 
    level, postedAt, contract, location, languages, tools}){
    let languagesConcat = languages.join(", ")
    let toolsConcat = tools.join(", ")
    return(
        <div className="jobCard">
            {logoUrl? <img src={logoUrl} alt="" className="imgRound" /> : <img src='./images/jobChaser-default.svg' alt="" className="imgRound" />}
            <div className="jobDescription">
                <h2 className="jobDescriptionHeading">Job Description</h2>
                <div className="jobDescriptionItems">
                    {company && <p className='jobCardInfo'><b>Company</b>: {company}</p>}
                    {position && <p className='jobCardInfo'> <b>Position</b>: {position}</p>}
                    {role && <p className='jobCardInfo'><b>Role</b>: {role}</p>}
                    {level && <p className='jobCardInfo'><b>Level</b>: {level}</p>}
                    {postedAt && <p className='jobCardInfo'><b>Posted</b>: {postedAt}</p>}
                    {contract && <p className='jobCardInfo'><b>Contract</b>: {contract}</p>}
                    {location && <p className='jobCardInfo'><b>Location</b>: {location}</p>}
                    {languagesConcat && <p className='jobCardInfo'><b>Languages</b>: {languagesConcat}</p>}
                    {toolsConcat && <p className='jobCardInfo'><b>Tools</b>: {toolsConcat}</p>}
                </div>
            </div>
            <div className="buttons">
                <button>Tag 1</button>
                <button>Tag 2</button>
                <button>Tag 3</button>
                <button>Tag 4</button>
            </div>
        </div>
    );
}