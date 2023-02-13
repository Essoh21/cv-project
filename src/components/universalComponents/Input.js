const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.inputId}>
                {props.inputLabelContent}
            </label>
            <input
                id={props.inputId}
                type={props.inputType}
                name={props.inputName}
                style={props.inputStyle}
                onChange={props.handleChange}
            />

        </div>
    )
}

export default Input;