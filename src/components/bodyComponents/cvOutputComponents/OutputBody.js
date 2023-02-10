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
                    sectionTitle={props.employmentTitle}
                    position={props.position}
                    employer={props.employer}
                    employmentState={props.employmentState}
                    startDate={props.startDate}
                    endDate={props.endDate}
                    isPositionPresent={props.isPositionPresent}
                    employmentDescription={props.employmentDescription}
                />
            </div>
            <div className="OutputAsside">
                OutputAsside
            </div>
        </div >
    )
}

export default OutputBody;