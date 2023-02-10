const OutputProfile = (props) => {
    return (
        <div className={props.outputProfileClassName}>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.profile}
            </p>
        </div>
    )
}

export default OutputProfile;