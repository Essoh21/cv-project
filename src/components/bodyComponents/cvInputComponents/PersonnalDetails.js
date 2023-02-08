import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";

const PersonnalDetails = () => {
    return (
        <div className="PersonnalInfo">
            <h3>
                Personnal details
            </h3>
            <form>
                <div>
                    <Input inputId="user-name"
                        inputLabelContent="Name:" inputType="text" >
                    </Input>
                    <Input inputId="user-surname"
                        inputLabelContent="Surname:" inputType="text" >
                    </Input>
                    <Input inputId="user-age"
                        inputLabelContent="Age:" inputType="number" >
                    </Input>
                    <Input inputId="user-email"
                        inputLabelContent="Email:" inputType="email" >
                    </Input>
                    <Input inputId="user-phone-number"
                        inputLabelContent="Phone Number:" inputType="number" >
                    </Input>
                </div>
                <Button buttonType="submit"
                    buttonContent="Add Informations" />
            </form>

        </div>
    )
}

export default PersonnalDetails;