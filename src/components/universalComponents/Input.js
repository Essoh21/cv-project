const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.inputId}>
                {props.inputLabelContent}
            </label>
            <input
                id={props.inputId}
                type={props.inputType}
                name={props.inputnName}
                style={props.inputStyle}
            />

        </div>
    )
}

export default Input;