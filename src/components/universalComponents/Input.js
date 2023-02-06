const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.inputId}>
                {props.inputLabelContent}
            </label>
            <input id={props.inputId}
                type={props.inputType}>
            </input>
        </div>
    )
}

export default Input;