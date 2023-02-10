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
                setUserName={props.setUserName}
                setUserSurname={props.setUserSurname}
                setUserAge={props.setUserAge}
                setUserEmail={props.setUserEmail}
                setUserPhoneNumber={props.setUserPhoneNumber}
                setUserJob={props.setUserJob}

            />
            <Profile
                handleProfileChange={props.setProfile}
            />
            <Employment containerClassName="EmploymentContainer" />
            <Education containerClassName="EducationContainer" />
            <Language containerClassName="LanguageContainer" />
            <Hobby containerClassName="HobbyContainer" />
        </div>
    )
}

export default CvInput;