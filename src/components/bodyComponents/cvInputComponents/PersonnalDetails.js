import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";

const PersonnalDetails = (props) => {
    return (
        <div className="PersonnalInfo">
            <h3>
                Personnal details
            </h3>
            <form>
                <div>
                    <Input inputId="user-name"
                        inputLabelContent="Name:" inputType="text"
                        handleChange={props.setUserName}
                    />

                    <Input inputId="user-surname"
                        inputLabelContent="Surname:" inputType="text"
                        handleChange={props.setUserSurname}
                    />
                    <Input inputId="user-age"
                        inputLabelContent="Age:" inputType="number"
                        handleChange={props.setUserAge}
                    />
                    <Input inputId="user-email"
                        inputLabelContent="Email:" inputType="email"
                        handleChange={props.setUserEmail}
                    />
                    <Input inputId="user-phone-number"
                        inputLabelContent="Phone Number:"
                        inputType="number"
                        handleChange={props.setUserPhoneNumber}
                    />

                    <Input inputId="user-job-title"
                        inputLabelContent="Job:"
                        inputType="text"
                        handleChange={props.setUserJob}
                    />
                </div>
                <Button buttonType="submit"
                    buttonContent="Add Informations" />
            </form>

        </div>
    )
}

export default PersonnalDetails;