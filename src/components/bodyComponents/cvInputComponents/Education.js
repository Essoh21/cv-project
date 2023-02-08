import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";
import { useId } from "react";

const Education = (props) => {
    const TitleInputStyle = {
        width: "clamp(var(--label-width), 100%, 35rem)"
        , boxSizing: "border-box"
    }
    return (
        <div className={props.containerClassName}>
            <hr />
            <section>
                <h3>
                    Education
                </h3>
                <form>
                    <div className="EducationInputs">
                        <Input
                            inputId={useId()}
                            inputType="text"
                            inputLabelContent="Title"
                            inputName="position"
                            inputStyle={TitleInputStyle}
                        />

                        <div className="SchoolAndCity">
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="School"
                                inputName="school"
                            />

                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="City"
                                inputName="city"
                            />
                        </div>
                        <div>
                            <Input
                                inputType="date"
                                inputLabelContent="Start date"
                                inputId={useId()}
                                inputName="startDate"
                            />
                            <Input
                                inputType="date"
                                inputLabelContent="End date"
                                inputId={useId()}
                                inputName="endDate"
                            />
                            <Input
                                inputType="checkbox"
                                inputLabelContent="Present"
                                inputId={useId()}
                                inputName="present"
                            />
                        </div>

                        <TextArea
                            areaRows="6"
                            areaId={useId()}
                            areaLabelContent="Description"
                        />

                    </div>
                    <div className="EducationButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                        />
                        <Button
                            buttonContent="Add Education"
                            buttonType="submit"
                        />

                    </div>
                </form>
            </section>
        </div >
    )
}

export default Education;