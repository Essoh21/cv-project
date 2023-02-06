import TextArea from "../../universalComponents/TextArea";
const Profile = () => {
    return (
        <div>
            <h3>
                Profile
            </h3>
            <div>
                <form>
                    <TextArea areaLabelContent="Your profile"
                        areaId="user-profile"
                        areaMaxLength="80" />
                </form>
            </div>
        </div>
    )
}

export default Profile;