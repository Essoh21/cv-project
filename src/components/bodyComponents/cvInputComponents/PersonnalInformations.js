import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";

const PersonnalInformations = () => {
    return (
        <div>
            <h3>
                Personnal Informations
            </h3>
            <form>
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
                    inputLabelContent="PhoneNumber:" inputType="number" >
                </Input>
                <Button buttonType="submit"
                    buttonContent="Add Informations" />
            </form>
        </div>
    )
}

export default PersonnalInformations;