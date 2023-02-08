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
                        />

                        <div className="EmployerAndCity">
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="Employer"
                                inputName="employer"
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