const OutputEducation = (props) => {
    return (
        <section className={props.outputEducationClassName}>
            <h3>
                Education
            </h3>
            {props.education.map((educationLevel) => (
                <div key={educationLevel.id}
                    className="DisplayedEduction"
                >
                    <div className="TitleAndDate">
                        <span>
                            <h4>{educationLevel.title} </h4>
                            <p>{educationLevel.school}, {educationLevel.state} </p>
                        </span>
                        <span>
                            {educationLevel.startDate} -- {educationLevel.isEducationPresent ? "present" : educationLevel.endDate}
                        </span>
                    </div>
                    <p>
                        {educationLevel.description}
                    </p>
                </div>
            ))}



        </section>
    )
}

export default OutputEducation;