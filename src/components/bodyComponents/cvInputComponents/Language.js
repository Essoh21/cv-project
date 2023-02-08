import Input from "../../universalComponents/Input";
import { useId } from "react";
import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";

const Language = (props) => {
    const selectionId = useId();
    const languageInputId = useId();
    const textAreaId = useId();
    return (
        <div className={props.containerClassName}>
            <hr />
            <section>
                <h3> Language</h3>
                <form>
                    <div className="LanguageInputs">
                        <Input
                            inputId={languageInputId}
                            inputName="language"
                            inputLabelContent="Language"

                        />
                        <div >
                            <label htmlFor={selectionId}>
                                Select level:
                            </label>
                            <select id={selectionId} name="level">
                                <option> Fluent</option>
                                <option> Very good</option>
                                <option>Good </option>
                                <option> Moderate</option>
                                <option> Beginner</option>
                            </select>
                        </div>
                    </div>
                    <TextArea
                        areaLabelContent="descritpion(optional)"
                        areaId={textAreaId}
                    />
                    <div className="LanguageButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                        />
                        <Button
                            buttonContent="Add language"
                            buttonType="submit"
                        />

                    </div>
                </form>
            </section>
        </div>
    )
}

export default Language;