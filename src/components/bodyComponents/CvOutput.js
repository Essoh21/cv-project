import OutputHeader from "./cvOutputComponents/OutputHeader";

const CvOutput = (props) => {
    return (
        <div className={props.outputsClassName}>
            <OutputHeader
                outputHeaderClassName="OutputHeader"
                userName="John Doe"
                userAge="38"
                userJob="Software Engenier"
                userPhone="223545 57276525 584 "
                userEmail="dfdkjhsd@dsjkfhkfs"
                profileContainerClassName="OutputProfileContainer"
                adressContainerClassName="OutputAdressContainer"
            />
        </div>
    )
}

export default CvOutput;