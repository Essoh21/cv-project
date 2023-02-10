import OutputHeader from "./cvOutputComponents/OutputHeader";

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
        </div>
    )
}

export default CvOutput;