import OutputHeader from "./cvOutputComponents/OutputHeader";
import OutputBody from "./cvOutputComponents/OutputBody";
import DownloadPDFButton from "../universalComponents/DownloadPDFButton";

const CvOutput = (props) => {
    return (
        <div>
            <div className={props.outputsClassName} id="CV">
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
                    education={props.education}
                    languages={props.languages}

                />
            </div>
            <DownloadPDFButton targetDivId="CV" />
        </div>
    )
}

export default CvOutput;