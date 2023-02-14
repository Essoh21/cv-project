import OutputHeader from "./cvOutputComponents/OutputHeader";
import OutputBody from "./cvOutputComponents/OutputBody";

const CvOutput = (props) => {
    return (
        <div className={props.outputsClassName}>
            <OutputHeader
                outputHeaderClassName="OutputHeader"
                personalDetails={props.personalDetails}
                profileContainerClassName="OutputProfileContainer"
                adressContainerClassName="OutputAdressContainer"
            />
            <OutputBody
                outputBodyClassName="OutputBody"
                userProfile={props.personalDetails.userProfile}
                employments={props.employments}

            />
        </div>
    )
}

export default CvOutput;