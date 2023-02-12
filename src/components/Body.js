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
            }
        }
    }
    addInformations = (e) => {
        e.target.preventDefault();
        alert('Informations Added');
    }

    setPersonalDetailsElement = (e, element) => {
        const personalDetailsCopy = JSON.parse(JSON.stringify(this.state.personalDetails));
        personalDetailsCopy[element] = e.target.value;
        this.setState({
            personalDetails: personalDetailsCopy
        })
    }
    setUserName = (e) => {
        this.setPersonalDetailsElement(e, 'userName');
    }

    setUserSurname = (e) => {
        this.setPersonalDetailsElement(e, 'userSurname');
    }

    setUserAge = (e) => {
        this.setPersonalDetailsElement(e, 'userAge');
    }

    setUserEmail = (e) => {
        this.setPersonalDetailsElement(e, 'userEmail');
    }

    setUserPhoneNumber = (e) => {
        this.setPersonalDetailsElement(e, 'userPhoneNumber');
    }

    setUserJob = (e) => {
        this.setPersonalDetailsElement(e, 'userJob');
    }

    setProfile = (e) => {
        this.setPersonalDetailsElement(e, 'userProfile');
    }

    setEmploymentElement = (e, element) => {
        const employmentCopy = JSON.parse(JSON.stringify(this.state.employment));
        employmentCopy[element] = e.target.value;
        this.setState({
            employment: employmentCopy
        })
    }
    setEmploymentPosition = (e) => {
        this.setEmploymentElement(e, 'position');
    }

    setEmploymentState = (e) => {
        this.setEmploymentElement(e, 'state');
    }

    setEmploymentStartDate = (e) => {
        this.setEmploymentElement(e, 'startDate')
    }

    setEmploymentEndDate = (e) => {
        this.setEmploymentElement(e, 'endDate')
    }

    setEmploymentEmployer = (e) => {
        this.setEmploymentElement(e, 'employer');
    }

    setEmploymentDescription = (e) => {
        this.setEmploymentElement(e, 'description')
    }

    setEmploymentIsPresent = (e) => {
        this.setEmploymentElement(e, 'isPositionPresent')
    }
    inputsHandlers = {
        setUserName: this.setUserName,
        setUserSurname: this.setUserSurname,
        setUserAge: this.setUserAge,
        setUserPhoneNumber: this.setUserPhoneNumber,
        setUserEmail: this.setUserEmail,
        setUserJob: this.setUserJob,
        setProfile: this.setProfile,
    }
    employmentHandler = {
        setEmploymentPosition: this.setEmploymentPosition,
        setEmploymentState: this.setEmploymentState,
        setEmploymentStartDate: this.setEmploymentStartDate,
        setEmploymentEndDate: this.setEmploymentEndDate,
        setEmploymentEmployer: this.setEmploymentEmployer,
        setEmploymentDescription: this.setEmploymentDescription,
        setEmploymentIsPresent: this.setEmploymentIsPresent
    }
    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                    inputsHandlers={this.inputsHandlers}
                    employmentHandler={this.employmentHandler}
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