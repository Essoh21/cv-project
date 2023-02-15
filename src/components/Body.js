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

            employments: [
                {
                    id: 1,
                    position: '',
                    employer: '',
                    isPositionPresent: false,
                    startDate: '',
                    endDate: '',
                    description: '',
                    state: ''
                },
            ],
            education: [
                {
                    id: 1,
                    title: '',
                    state: '',
                    school: '',
                    isEducationPresent: false,
                    description: '',
                    startDate: '',
                    endDate: '',
                }
            ]
        }
    }

    handleAddEmployment = (event) => {
        event.preventDefault();
        const newEmployment = {
            id: Date.now(),
            position: '',
            employer: '',
            isPositionPresent: false,
            startDate: '',
            endDate: '',
            description: '',
            state: ''
        }
        this.setState({
            employments: [...this.state.employments, newEmployment]
        })
    }

    handleAddEducation = (event) => {
        event.preventDefault();
        const newLevel = {
            id: Date.now(),
            title: '',
            state: '',
            school: '',
            isEducationPresent: false,
            description: '',
            startDate: '',
            endDate: '',
        }
        this.setState({
            education: [...this.state.education, newLevel]
        })
    }

    handleDeleteEmployment = (id) => {
        if (id !== 1) {
            this.setState({
                employments: this.state.employments.filter(
                    (employment) => employment.id !== id
                )
            });
        }
    }

    handleDeleteEducation = (id) => {
        if (id !== 1) {
            this.setState({
                education: this.state.education.filter(
                    (educationLevel) => educationLevel.id !== id
                )
            });
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


    handleSetEmploymentElement = (id, event) => {
        const { name, value, type, checked } = event.target;
        this.setState((prevState) => ({
            employments: prevState.employments.map((employment) => {
                if (employment.id === id) {
                    return {
                        ...employment,
                        [name]: type === 'checkbox' ? checked : value
                    };
                }
                return employment;
            })
        }));
    }

    handleSetEducationElement = (id, event) => {
        const { name, value, type, checked } = event.target;
        this.setState((prevState) => ({
            education: prevState.education.map((educationLevel) => {
                if (educationLevel.id === id) {
                    return {
                        ...educationLevel,
                        [name]: type === 'checkbox' ? checked : value
                    };
                }
                return educationLevel;
            })
        }));
    }

    employmentHandlers = {
        handleDeleteEmployment: this.handleDeleteEmployment,
        handleAddEmployment: this.handleAddEmployment,
        setEmploymentElement: this.handleSetEmploymentElement

    }

    educationHandlers = {
        handleDeleteEducation: this.handleDeleteEducation,
        handleAddEducation: this.handleAddEducation,
        setEducationElement: this.handleSetEducationElement

    }


    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                    inputsHandler={this.setPersonalDetailsElement}
                    employmentHandlers={this.employmentHandlers}
                    employments={this.state.employments}
                    education={this.state.education}
                    educationHandlers={this.educationHandlers}
                />
                <CvOutput
                    outputsClassName="CvOutputsContainer"
                    personalDetails={this.state.personalDetails}
                    employments={this.state.employments}
                    education={this.state.education}
                />
            </div>
        )
    }
}

export default Body;