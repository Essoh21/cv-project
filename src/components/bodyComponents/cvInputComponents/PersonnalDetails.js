import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";

const PersonnalDetails = (props) => {
    const addInformations = (e) => {
        e.preventDefault();
        alert("success");
    }

    return (
        <div className="PersonnalInfo">
            <h3>
                Personnal details
            </h3>
            <form>
                <div>
                    <Input inputId="user-name"
                        inputLabelContent="Name:" inputType="text"
                        handleChange={props.inputsHandlers.setUserName}
                    />

                    <Input inputId="user-surname"
                        inputLabelContent="Surname:" inputType="text"
                        handleChange={props.inputsHandlers.setUserSurname}
                    />
                    <Input inputId="user-age"
                        inputLabelContent="Age:" inputType="number"
                        handleChange={props.inputsHandlers.setUserAge}
                    />
                    <Input inputId="user-email"
                        inputLabelContent="Email:" inputType="email"
                        handleChange={props.inputsHandlers.setUserEmail}
                    />
                    <Input inputId="user-phone-number"
                        inputLabelContent="Phone Number:"
                        inputType="number"
                        handleChange={props.inputsHandlers.setUserPhoneNumber}
                    />

                    <Input inputId="user-job-title"
                        inputLabelContent="Job:"
                        inputType="text"
                        handleChange={props.inputsHandlers.setUserJob}
                    />
                </div>
                <Button buttonType="submit"
                    buttonContent="Add Informations"
                    handleClick={addInformations}
                />
            </form>

        </div>
    )
}

export default PersonnalDetails;