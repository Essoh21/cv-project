import OutputEmployment from "./outputMainBodyComponents/OutputEmployment";
import OutputProfile from "./outputMainBodyComponents/OutputProfile";

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
            </div>
            <div className="OutputAsside">
                OutputAsside
            </div>
        </div >
    )
}

export default OutputBody;