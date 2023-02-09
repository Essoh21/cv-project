import { Component } from "react";
import React from "react";
import CvInput from "./bodyComponents/CvInput";
import CvOutput from "./bodyComponents/CvOutput";
class Body extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                />
                <CvOutput
                    outputsClassName="CvOutputsContainer"
                />
            </div>
        )
    }
}

export default Body;