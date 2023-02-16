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
                <form>
                    <div className="LanguageInputs">
                        <Input
                            inputId={languageInputId}
                            inputName="language"
                            inputLabelContent="Language"
                            handleChange={props.setLanguageElement}

                        />
                        <div >
                            <label htmlFor={selectionId}>
                                Select level:
                            </label>
                            <select id={selectionId} name="level"
                                onChange={props.setLanguageElement}
                            >
                                <option> Fluent</option>
                                <option> Very good</option>
                                <option>Good </option>
                                <option> Moderate</option>
                                <option> Beginner</option>
                            </select>
                        </div>
                    </div>
                    <TextArea
                        areaLabelContent="description(optional)"
                        areaId={textAreaId}
                        textAreaName='description'
                        handleChange={props.setLanguageElement}
                    />
                    <div className="LanguageButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                            handleClick={props.handleDeleteLanguage}
                        />
                        <Button
                            buttonContent="Add language"
                            buttonType="submit"
                            handleClick={props.handleAddLanguage}
                        />

                    </div>
                </form>
            </section>
        </div>
    )
}

export default Language;