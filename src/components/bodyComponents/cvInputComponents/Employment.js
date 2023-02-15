import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";
import { useId } from "react";

const Employment = (props) => {
    const PositionInputStyle = {
        width: "clamp(var(--label-width), 100%, 35rem)"
        , boxSizing: "border-box"
    }
    return (
        <div className={props.containerClassName}>
            <section>
                <form >
                    <div className="EmploymentInputs">
                        <Input
                            inputId={useId()}
                            inputType="text"
                            inputLabelContent="Position"
                            inputName="position"
                            inputStyle={PositionInputStyle}
                            handleChange={props.setEmploymentElement}
                            inputValue={props.employment.position}
                        />

                        <div className="EmployerAndCity">
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="Employer"
                                inputName="employer"
                                handleChange={props.setEmploymentElement}
                                inputValue={props.employment.employer}
                            />

                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="City"
                                inputName="state"
                                handleChange={props.setEmploymentElement}
                                inputValue={props.employment.state}
                            />
                        </div>
                        <div>
                            <Input
                                inputType="month"
                                inputLabelContent="Start date"
                                inputId={useId()}
                                inputName="startDate"
                                handleChange={props.setEmploymentElement}
                                inputValue={props.employment.startDate}
                            />
                            <Input
                                inputType="month"
                                inputLabelContent="End date"
                                inputId={useId()}
                                inputName="endDate"
                                handleChange={props.setEmploymentElement}
                                inputValue={props.employment.endDate}
                            />
                            <Input
                                inputType="checkbox"
                                inputLabelContent="Present"
                                inputId={useId()}
                                inputName="isPositionPresent"
                                handleChange={props.setEmploymentElement}
                                inputValue={props.employment.isPositionPresent}
                            />
                        </div>

                        <TextArea
                            areaRows="6"
                            areaId={useId()}
                            areaLabelContent="Description"
                            handleChange={props.setEmploymentElement}
                            textAreaName='description'
                        />

                    </div>
                    <div className="EmploymentButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                            handleClick={props.handleDeleteEmployment}
                        />
                        <Button
                            buttonContent="Add another Employment"
                            buttonType="submit"
                            handleClick={props.handleAddEmployment}
                        />

                    </div>
                </form>
            </section>
        </div >
    )
}

export default Employment;