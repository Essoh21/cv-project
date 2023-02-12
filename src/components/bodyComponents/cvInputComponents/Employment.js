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
            <hr />
            <section>
                <h3>
                    Employment
                </h3>
                <form>
                    <div className="EmploymentInputs">
                        <Input
                            inputId={useId()}
                            inputType="text"
                            inputLabelContent="Position"
                            inputName="position"
                            inputStyle={PositionInputStyle}
                            handleChange={props.employmentHandler.setEmploymentPosition}
                        />

                        <div className="EmployerAndCity">
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="Employer"
                                inputName="employer"
                                handleChange={props.employmentHandler.setEmploymentEmployer}
                            />

                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="City"
                                inputName="city"
                                handleChange={props.employmentHandler.setEmploymentState}
                            />
                        </div>
                        <div>
                            <Input
                                inputType="date"
                                inputLabelContent="Start date"
                                inputId={useId()}
                                inputName="startDate"
                                handleChange={props.employmentHandler.setEmploymentStartDate}
                            />
                            <Input
                                inputType="date"
                                inputLabelContent="End date"
                                inputId={useId()}
                                inputName="endDate"
                                handleChange={props.employmentHandler.setEmploymentEndDate}
                            />
                            <Input
                                inputType="checkbox"
                                inputLabelContent="Present"
                                inputId={useId()}
                                inputName="present"
                                handleChange={props.employmentHandler.setEmploymentIsPresent}
                            />
                        </div>

                        <TextArea
                            areaRows="6"
                            areaId={useId()}
                            areaLabelContent="Description"
                            handleChange={props.employmentHandler.setEmploymentDescription}
                        />

                    </div>
                    <div className="EmploymentButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                        />
                        <Button
                            buttonContent="Add position"
                            buttonType="submit"
                        />

                    </div>
                </form>
            </section>
        </div >
    )
}

export default Employment;