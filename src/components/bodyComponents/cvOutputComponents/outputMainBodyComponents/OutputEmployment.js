const OutputEmployment = (props) => {
    return (
        <section className={props.outputEmploymentClassName}>
            <h3>
                Employment
            </h3>
            {props.employments.map((employment) => (
                <div className="DisplayedEmployment"
                    key={employment.id}
                >
                    <div className="PositionAndDate">
                        <span>
                            <h4>{employment.position} </h4>
                            <p>{employment.employer}, {employment.state} </p>
                        </span>
                        <span>
                            {employment.startDate} -- {employment.isPositionPresent ? "present" : employment.endDate}
                        </span>
                    </div>
                    <p>
                        {employment.description}
                    </p>
                </div>
            ))}



        </section>
    )
}

export default OutputEmployment;