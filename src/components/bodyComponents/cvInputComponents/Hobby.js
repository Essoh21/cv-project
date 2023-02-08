import Input from "../../universalComponents/Input";
import { useId } from "react";
import Button from "../../universalComponents/Button";

const Hobby = (props) => {
    return (
        <div className={props.containerClassName}>
            <hr />
            <section>
                <h3> Hobby</h3>
                <form>
                    <Input
                        inputId={useId()}
                        inputName="hobby"
                        inputLabelContent="Hobby"

                    />
                    <div className="HobbyButtons">
                        <Button
                            buttonContent="Delete"
                            buttonType="button"
                            buttonStyle={{ backgroundColor: "#f33", color: "#222" }}
                        />
                        <Button
                            buttonContent="Add hobby"
                            buttonType="submit"
                        />

                    </div>
                </form>
            </section>
        </div>
    )
}

export default Hobby;