import PersonnalInformations from "./cvInputComponents/PersonnalInformations";
import Profile from "./cvInputComponents/Profile";
const CvInput = (props) => {
    return (
        <div className={props.inputsClassName}>
            <PersonnalInformations />
            <Profile />
        </div>
    )
}

export default CvInput;