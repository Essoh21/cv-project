import { Component } from "react";
import React from "react";
import CvInput from "./bodyComponents/CvInput";
import CvOutput from "./bodyComponents/CvOutput";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDetails: {
                userName: '',
                userEmail: '',
                userAge: '',
                userJob: '',
                userSurname: '',
                userPhoneNumber: '',
                userProfile: '',

            },

            employment: {
                title: 'Employments',
                position: '',
                employer: '',
                isPositionPresent: false,
                startDate: '',
                endDate: '',
                description: '',
                state: ''
            },
            employments: []
        }
    }
    addInformations = (e) => {
        e.target.preventDefault();
        alert('Informations Added');
    }

    setPersonalDetailsElement = (e) => {
        const personalDetailsCopy = JSON.parse(JSON.stringify(this.state.personalDetails));
        const target = e.target;
        const element = target.name;
        personalDetailsCopy[element] = e.target.value;
        this.setState({
            personalDetails: personalDetailsCopy
        })
    }

    setEmploymentElement = (e) => {
        const employmentCopy = JSON.parse(JSON.stringify(this.state.employment));
        const target = e.target;
        const element = target.name;
        employmentCopy[element] = e.target.value;
        this.setState({
            employment: employmentCopy
        })
    }

    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                    inputsHandler={this.setPersonalDetailsElement}
                    setEmploymentElement={this.setEmploymentElement}
                />
                <CvOutput
                    outputsClassName="CvOutputsContainer"
                    personalDetails={this.state.personalDetails}
                    employment={this.state.employment}
                />
            </div>
        )
    }
}

export default Body;