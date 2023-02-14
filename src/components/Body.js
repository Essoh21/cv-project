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
                    position: '',
                    employer: '',
                    isPositionPresent: false,
                    startDate: '',
                    endDate: '',
                    description: '',
                    state: ''
                },
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

    handleDeleteEmployment = (id) => {
        this.setState({
            employments: this.state.employments.filter(
                (employment) => employment.id !== id
            )
        });
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

    render() {
        return (
            <div className="body">
                <CvInput
                    inputsClassName="CvInputsContainer"
                    inputsHandler={this.setPersonalDetailsElement}
                    setEmploymentElement={this.handleSetEmploymentElement}
                    employments={this.state.employments}
                    handleSetEmploymentElement={this.handleSetEmploymentElement}
                    handleAddEmployment={this.handleAddEmployment}
                    handleDeleteEmployment={this.handleDeleteEmployment}
                />
                <CvOutput
                    outputsClassName="CvOutputsContainer"
                    personalDetails={this.state.personalDetails}
                    employments={this.state.employments}
                />
            </div>
        )
    }
}

export default Body;