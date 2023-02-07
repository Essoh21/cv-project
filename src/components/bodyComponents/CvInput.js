import PersonnalInformations from "./cvInputComponents/PersonnalInformations";
import Profile from "./cvInputComponents/Profile";
import Employment from "./cvInputComponents/Employment";
const CvInput = (props) => {
    return (
        <div className={props.inputsClassName}>
            <PersonnalInformations />
            <Profile />
            <Employment containerClassName="EmploymentContainer" />
        </div>
    )
}

export default CvInput;