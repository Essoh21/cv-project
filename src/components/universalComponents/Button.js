const Button = (props) => {
    return (
        <button type={props.buttonType} onClick={props.handleClick}>
            {props.buttonContent}
        </button>
    )
}

export default Button;