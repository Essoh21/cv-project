import OutputEmployment from "./outputMainBodyComponents/OutputEmployment";
import OutputProfile from "./outputMainBodyComponents/OutputProfile";
import OutputEducation from "./outputMainBodyComponents/OutputEducation";

const OutputBody = (props) => {
    return (
        <div className={props.outputBodyClassName}>
            <div className="OutputMainBody">
                <OutputProfile
                    title="Profile"
                    profile={props.userProfile}
                />
                <OutputEmployment
                    outputEmploymentClassName="EmploymentSection"
                    employments={props.employments}
                />
                <OutputEducation
                    outputEducationClassName='EducationSection'
                    education={props.education}
                />
            </div>
            <div className="OutputAsside">
                OutputAsside
            </div>
        </div >
    )
}

export default OutputBody;