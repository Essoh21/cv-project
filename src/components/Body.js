import { Component } from "react";
import React from "react";
import CvInput from "./bodyComponents/CvInput";
import CvOutput from "./bodyComponents/CvOutput";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userAge: '',
            userJob: '',
            userSurname: '',
            userPhoneNumber: '',
            userProfile: '',
        }
    }
    addInformations = (e) => {
        e.target.preventDefault();
        alert('Informations Added');
    }
    setUserName = (e) => {
        this.setState(
            { userName: e.target.value }
        )
    }

    setUserSurname = (e) => {
        this.setState(
            { userSurname: e.target.value }
        )
    }

    setUserAge = (e) => {
        this.setState(
            { userAge: e.target.value }
        )
    }

    setUserEmail = (e) => {
        this.setState(
            { userEmail: e.target.value }
        )
    }

    setUserPhoneNumber = (e) => {
        this.setState(
            { userPhoneNumber: e.target.value }
        )
    }

    setUserJob = (e) => {
        this.setState(
            { userJob: e.target.value }
        )
    }

    setProfile = (e) => {
        this.setState(
            {
                userProfile: e.target.value
            }
        )
    }


    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                    setUserName={this.setUserName}
                    setUserSurname={this.setUserSurname}
                    setUserAge={this.setUserAge}
                    setUserPhoneNumber={this.setUserPhoneNumber}
                    setUserEmail={this.setUserEmail}
                    setUserJob={this.setUserJob}
                    setProfile={this.setProfile}
                />
                <CvOutput
                    outputsClassName="CvOutputsContainer"
                    userName={this.state.userName}
                    userSurname={this.state.userSurname}
                    userEmail={this.state.userEmail}
                    userAge={this.state.userAge}
                    userJob={this.state.userJob}
                    userPhoneNumber={this.state.userPhoneNumber}
                    userProfile={this.state.userProfile}

                    sectionTitle={this.state.employmentTitle}
                    position={this.state.position}
                    employer={this.state.employer}
                    employmentState={this.state.employmentState}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    isPositionPresent={this.state.isPositionPresent}
                    employmentDescription={this.state.employmentDescription}

                />
            </div>
        )
    }
}

export default Body;