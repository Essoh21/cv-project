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
                        handleChange={props.inputsHandler}
                        inputName="userName"
                    />

                    <Input inputId="user-surname"
                        inputLabelContent="Surname:" inputType="text"
                        handleChange={props.inputsHandler}
                        inputName="userSurname"

                    />
                    <Input inputId="user-age"
                        inputLabelContent="Age:" inputType="number"
                        handleChange={props.inputsHandler}
                        inputName="userAge"
                    />
                    <Input inputId="user-email"
                        inputLabelContent="Email:" inputType="email"
                        handleChange={props.inputsHandler}
                        inputName="userEmail"
                    />
                    <Input inputId="user-phone-number"
                        inputLabelContent="Phone Number:"
                        inputType="number"
                        handleChange={props.inputsHandler}
                        inputName="userPhoneNumber"
                    />

                    <Input inputId="user-job-title"
                        inputLabelContent="Job:"
                        inputType="text"
                        handleChange={props.inputsHandler}
                        inputName="userJob"
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