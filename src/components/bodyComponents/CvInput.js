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
                <h3 >
                    Employments
                </h3>
                {props.employments.map((employment) => (
                    <Employment key={employment.id}
                        employment={employment}
                        containerClassName="EmploymentContainer"
                        handleAddEmployment={props.employmentHandlers.handleAddEmployment}
                        setEmploymentElement={(event) =>
                            props.employmentHandlers.setEmploymentElement(employment.id, event)}
                        handleDeleteEmployment={() => props.employmentHandlers.handleDeleteEmployment(employment.id)}
                    />
                ))}

            </div>
            <div>
                <hr />
                <h3>Education</h3>
                {props.education.map((educationLevel) => (
                    <Education key={educationLevel.id}
                        containerClassName="EducationContainer"
                        education={educationLevel}
                        handleAddLevel={props.educationHandlers.handleAddEducation}
                        setEducationElement={(event) =>
                            props.educationHandlers.setEducationElement(educationLevel.id, event)}
                        handleDeleteEducation={() => props.educationHandlers.handleDeleteEducation(educationLevel.id)}
                    />
                ))}
            </div>
            <Language containerClassName="LanguageContainer" />
            <Hobby containerClassName="HobbyContainer" />
        </div>
    )
}

export default CvInput;