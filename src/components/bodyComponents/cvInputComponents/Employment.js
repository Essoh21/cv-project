import Input from "../../universalComponents/Input";
import Button from "../../universalComponents/Button";
import TextArea from "../../universalComponents/TextArea";
import { useId } from "react";

const Employment = (props) => {
    return (
        <div className={props.containerClassName}>
            <section>
                <h3>
                    Employment
                </h3>
                <form>
                    <div className="PositionInputContainer">
                        <Input
                            inputId={useId()}
                            inputType="text"
                            inputLabelContent="Position"
                            inputName="position"
                        />
                        <div>
                            <Input
                                inputId={useId()}
                                inputType="text"
                                inputLabelContent="Employer"
                                inputName="employer"
                            />
                            <div>
                                <Input
                                    inputId={useId()}
                                    inputType="text"
                                    inputLabelContent="City"
                                    inputName="city"
                                />
                            </div>
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
                        <div>
                            <TextArea
                                areaRows="6"
                                areaId={useId()}
                                areaLabelContent="Description"
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                        />
                        <Button
                            buttonContent="Add position"
                            buttonType="submit"
                        />

                    </div>
                </form>
            </section>

        </div>
    )
}

export default Employment;