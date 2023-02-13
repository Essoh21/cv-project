import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";
import preventDefaultSubmit from "../../universalComponents/preventDefaultSubmit";
const Profile = (props) => {
    return (
        <div className="Profile">
            <hr />
            <h3>
                Profile
            </h3>
            <div>
                <form>
                    <TextArea
                        areaLabelContent="Your profile"
                        areaId="user-profile"
                        areaRows="10"
                        handleChange={props.handleProfileChange}
                        textAreaName="userProfile"
                    />
                    <Button
                        buttonContent="Add Profile"
                        handleClick={preventDefaultSubmit}
                    />
                </form>
            </div>
        </div>
    )
}

export default Profile;