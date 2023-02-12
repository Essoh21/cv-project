const OutputHeader = (props) => {
    return (
        <div className={props.outputHeaderClassName}>
            <div className={props.profileContainerClassName}>
                <h2>
                    {props.personalDetails.userName} {' '} {props.personalDetails.userSurname}, {' '}
                    {props.personalDetails.userAge} years old
                </h2>
                <h4>
                    {props.personalDetails.userJob}
                </h4>
            </div>
            <div className={props.adressContainerClassName}>
                <h4>
                    <span style={{ fontWeight: "100px" }}>&#128222;</span>
                    {props.personalDetails.userPhoneNumber}
                </h4>
                <h4>
                    {props.personalDetails.userEmail}
                </h4>
            </div>

        </div>
    )
}

export default OutputHeader;