const Button = (props) => {
    return (
        <button
            type={props.buttonType}
            onClick={props.handleClick}
            style={props.buttonStyle}
        >
            {props.buttonContent}
        </button>
    )
}

export default Button;