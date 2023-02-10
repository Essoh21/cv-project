const OutputEmployment = (props) => {
    return (
        <section className={props.OutputEmploymentClassName}>
            <h3>
                {props.sectionTitle}
            </h3>
            <div>
                <span>
                    <h4>{props.position} </h4>
                    <p>{props.employer}, {props.employmentState} </p>
                </span>
                <span>
                    {props.startDate} - {props.isPositionPresent ? "present" : props.endDate}
                </span>
            </div>
            <p>
                {props.employmentDescription}
            </p>

        </section>
    )
}

export default OutputEmployment;