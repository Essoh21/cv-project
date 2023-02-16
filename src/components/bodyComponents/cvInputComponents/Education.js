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
                <form>
                    <div className="EducationInputs">
                        <Input
                            inputId={useId()}
                            inputType="text"
                            inputLabelContent="Title"
                            inputName="title"
                            inputStyle={TitleInputStyle}
                            inputValue={props.education.title}
                            handleChange={props.setEducationElement}
                        />

                        <div className="SchoolAndCity">
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="School"
                                inputName="school"
                                inputValue={props.education.school}
                                handleChange={props.setEducationElement}
                            />

                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="City"
                                inputName="state"
                                inputValue={props.education.state}
                                handleChange={props.setEducationElement}

                            />
                        </div>
                        <div>
                            <Input
                                inputType="month"
                                inputLabelContent="Start date"
                                inputId={useId()}
                                inputName="startDate"
                                inputValue={props.education.startDate}
                                handleChange={props.setEducationElement}
                            />
                            <Input
                                inputType="month"
                                inputLabelContent="End date"
                                inputId={useId()}
                                inputName="endDate"
                                inputValue={props.education.endDate}
                                handleChange={props.setEducationElement}
                            />
                            <Input
                                inputType="checkbox"
                                inputLabelContent="Present"
                                inputId={useId()}
                                inputName="isEducationPresent"
                                inputValue={props.education.isEducationPresent}
                                handleChange={props.setEducationElement}
                            />
                        </div>

                        <TextArea
                            areaRows="6"
                            areaId={useId()}
                            areaLabelContent="Description"
                            handleChange={props.setEducationElement}
                            textAreaName='description'
                        />

                    </div>
                    <div className="EducationButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                            handleClick={props.handleDeleteEducation}
                        />
                        <Button
                            buttonContent="Add another Level"
                            buttonType="submit"
                            handleClick={props.handleAddLevel}
                        />

                    </div>
                </form>
            </section>
        </div >
    )
}

export default Education;