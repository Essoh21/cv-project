import PersonnalDetails from "./cvInputComponents/PersonnalDetails";
import Profile from "./cvInputComponents/Profile";
import Employment from "./cvInputComponents/Employment";
import Education from "./cvInputComponents/Education";
import Language from "./cvInputComponents/Language";
import Hobby from "./cvInputComponents/Hobby";


const CvInput = (props) => {
    return (
        <div className={props.inputsClassName}>
            <PersonnalDetails
                inputsHandler={props.inputsHandler}
            />
            <Profile
                handleProfileChange={props.inputsHandler}
            />
            <div>
                <hr />
                <h3>
                    Employments
                </h3>
                {props.employments.map((employment) => (
                    <Employment
                        key={employment.id}
                        employment={employment}
                        containerClassName="employmentContainer"
                        handleAddEmployment={props.handleAddEmployment}
                        setEmploymentElement={(event) =>
                            props.handleSetEmploymentElement(employment.id, event)}
                        handleDeleteEmployment={() => props.handleDeleteEmployment(employment.id)}
                    />
                ))}

            </div>

            <Education containerClassName="EducationContainer" />
            <Language containerClassName="LanguageContainer" />
            <Hobby containerClassName="HobbyContainer" />
        </div>
    )
}

export default CvInput;