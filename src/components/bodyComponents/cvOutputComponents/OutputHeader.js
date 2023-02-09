const OutputHeader = (props) => {
    return (
        <div className={props.outputHeaderClassName}>
            <div className={props.profileContainerClassName}>
                <h2>
                    {props.userName} {' '} {props.userAge} years old
                </h2>
                <h4>
                    {props.userJob}
                </h4>
            </div>
            <div className={props.adressContainerClassName}>
                <h4>
                    <span style={{ fontWeight: "100px" }}>&#128222;</span>
                    {props.userPhone}
                </h4>
                <h4>
                    {props.userEmail}
                </h4>
            </div>

        </div>
    )
}

export default OutputHeader;