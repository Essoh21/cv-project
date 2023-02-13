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
            <Employment
                containerClassName="EmploymentContainer"
                setEmploymentElement={props.setEmploymentElement}
            />
            <Education containerClassName="EducationContainer" />
            <Language containerClassName="LanguageContainer" />
            <Hobby containerClassName="HobbyContainer" />
        </div>
    )
}

export default CvInput;