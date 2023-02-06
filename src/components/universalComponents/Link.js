const Link = (props) => {
    return (
        <a href={props.link}>
            {props.linkText}
        </a>
    )
}

export default Link;