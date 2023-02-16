import OutputEmployment from "./outputMainBodyComponents/OutputEmployment";
import OutputProfile from "./outputMainBodyComponents/OutputProfile";
import OutputEducation from "./outputMainBodyComponents/OutputEducation";
import OutputLanguage from "./outputMainBodyComponents/OutputLanguage";


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
                <OutputLanguage
                    outputlanguagesClassName='LanguageSection'
                    languages={props.languages}
                />

            </div>
            <div className="OutputAsside">
                OutputAsside
            </div>
        </div >
    )
}

export default OutputBody;