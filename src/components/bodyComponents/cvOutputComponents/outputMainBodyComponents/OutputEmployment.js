const OutputEmployment = (props) => {
    return (
        <section className={props.outputEmploymentClassName}>
            <h3>
                {props.employment.title}
            </h3>
            <div className="PositionAndDate">
                <span>
                    <h4>{props.employment.position} </h4>
                    <p>{props.employment.employer}, {props.employment.state} </p>
                </span>
                <span>
                    {props.employment.startDate} -- {props.employment.isPositionPresent ? "present" : props.employment.endDate}
                </span>
            </div>
            <p>
                {props.employment.description}
            </p>

        </section>
    )
}

export default OutputEmployment;