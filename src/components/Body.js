
import React from "react";
import CvInput from "./bodyComponents/CvInput";
import CvOutput from "./bodyComponents/CvOutput";
import { useState } from "react";

function Body(props) {

    const [personalDetails, setPersonalDetails] = useState({
        userName: '',
        userEmail: '',
        userAge: '',
        userJob: '',
        userSurname: '',
        userPhoneNumber: '',
        userProfile: '',
    });

    const [employments, setEmployments] = useState([
        {
            id: 1,
            position: '',
            employer: '',
            isPositionPresent: false,
            startDate: '',
            endDate: '',
            description: '',
            state: '',
        },
    ]);

    const [education, setEducation] = useState([
        {
            id: 1,
            title: '',
            state: '',
            school: '',
            isEducationPresent: false,
            description: '',
            startDate: '',
            endDate: '',
        },
    ]);

    const [languages, setLanguages] = useState([
        {
            id: 1,
            language: '',
            level: 'Fluent',
            description: '',
        },
    ]);

    const handleAddEmployment = (event) => {
        event.preventDefault();
        const newEmployment = {
            id: Date.now(),
            position: '',
            employer: '',
            isPositionPresent: false,
            startDate: '',
            endDate: '',
            description: '',
            state: '',
        };
        setEmployments([...employments, newEmployment]);
    };

    const handleAddEducation = (event) => {
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
        };
        setEducation([...education, newLevel]);
    };

    const handleAddLanguage = (event) => {
        event.preventDefault();
        const newLanguage = {
            id: Date.now(),
            language: '',
            level: 'Fluent',
            description: '',
        };
        setLanguages([...languages, newLanguage]);
    };

    const handleDeleteEmployment = (id) => {
        if (id !== 1) {
            setEmployments(employments.filter((employment) => employment.id !== id));
        }
    };

    const handleDeleteLanguage = (id) => {
        if (id !== 1) {
            setLanguages(languages.filter((language) => language.id !== id));
        }
    };

    const handleDeleteEducation = (id) => {
        if (id !== 1) {
            setEducation(education.filter((educationLevel) => educationLevel.id !== id));
        }
    };

    const addInformations = (e) => {
        e.target.preventDefault();
        alert('Informations Added');
    };

    const setPersonalDetailsElement = (e) => {
        const personalDetailsCopy = { ...personalDetails };
        const target = e.target;
        const element = target.name;
        personalDetailsCopy[element] = e.target.value;
        setPersonalDetails(personalDetailsCopy);
    };

    const handleSetEmploymentElement = (id, event) => {
        const { name, value, type, checked } = event.target;
        setEmployments((prevState) => ({
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

    const handleSetEducationElement = (id, event) => {
        const { name, value, type, checked } = event.target;
        setEducation((prevState) => ({
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

    const handleSetLanguageElement = (id, event) => {
        const { name, value } = event.target;
        setLanguages((prevState) => ({
            languages: prevState.languages.map((language) => {
                if (language.id === id) {
                    return {
                        ...language,
                        [name]: value
                    };
                }
                return language;
            })
        }));
    }



    const employmentHandlers = {
        handleDeleteEmployment,
        handleAddEmployment,
        setEmploymentElement: handleSetEmploymentElement

    }

    const educationHandlers = {
        handleDeleteEducation,
        handleAddEducation,
        setEducationElement: handleSetEducationElement

    }

    const languageHandlers = {
        handleDeleteLanguage,
        handleAddLanguage,
        setLanguageElement: handleSetLanguageElement

    }

    return (
        <div className="body">
            <CvInput
                inputsClassName="CvInputsContainer"
                inputsHandler={setPersonalDetailsElement}
                employmentHandlers={employmentHandlers}
                employments={employments}
                education={education}
                educationHandlers={educationHandlers}
                languageHandlers={languageHandlers}
                languages={languages}
            />
            <CvOutput
                outputsClassName="CvOutputsContainer"
                personalDetails={personalDetails}
                employments={employments}
                education={education}
                languages={languages}
            />
        </div>
    )
}


export default Body;