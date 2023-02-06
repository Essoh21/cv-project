const Button = (props) => {
    return (
        <button type={props.buttonType}>
            {props.buttonContent}
        </button>
    )
}

export default Button;