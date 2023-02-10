import OutputHeader from "./cvOutputComponents/OutputHeader";
import OutputBody from "./cvOutputComponents/OutputBody";

const CvOutput = (props) => {
    return (
        <div className={props.outputsClassName}>
            <OutputHeader
                outputHeaderClassName="OutputHeader"
                userName={props.userName}
                userSurname={props.userSurname}
                userAge={props.userAge}
                userJob={props.userJob}
                userPhoneNumber={props.userPhoneNumber}
                userEmail={props.userEmail}
                profileContainerClassName="OutputProfileContainer"
                adressContainerClassName="OutputAdressContainer"
            />
            <OutputBody
                outputBodyClassName="OutputBody"
                userProfile={props.userProfile}
                sectionTitle={props.employmentTitle}
                position={props.position}
                employer={props.employer}
                employmentState={props.employmentState}
                startDate={props.startDate}
                endDate={props.endDate}
                isPositionPresent={props.isPositionPresent}
                employmentDescription={props.employmentDescription}

            />
        </div>
    )
}

export default CvOutput;