
import './styles/jobCard.css'
import './index.css'

export default JobCard

function JobCard({company, logoUrl, position, role, 
    level, postedAt, contract, location, languages, tools}){
    let languagesConcat = languages.join(", ")
    let toolsConcat = tools.join(", ")
    return(
        <div className="jobCard">
            <img src={logoUrl} alt="" className="imgRound" />
            <div className="jobDescription">
                <h2 className="jobDescriptionHeading">Job Description</h2>
                <div className="jobDescriptionItems">
                    <p className='jobCardInfo'><b>Company</b>: {company}</p>
                    <p className='jobCardInfo'> <b>Position</b>: {position}</p>
                    <p className='jobCardInfo'><b>Role</b>: {role}</p>
                    <p className='jobCardInfo'><b>Level</b>: {level}</p>
                    <p className='jobCardInfo'><b>Posted</b>: {postedAt}</p>
                    <p className='jobCardInfo'><b>Contract</b>: {contract}</p>
                    <p className='jobCardInfo'><b>Location</b>: {location}</p>
                    <p className='jobCardInfo'><b>Languages</b>: {languagesConcat}</p>
                    <p className='jobCardInfo'><b>Tools</b>: {toolsConcat}</p>
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