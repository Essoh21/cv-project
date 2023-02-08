import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";
const Profile = () => {
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
                    />
                    <Button
                        buttonContent="Add Profile"
                    />
                </form>
            </div>
        </div>
    )
}

export default Profile;