import 'bootstrap/dist/css/bootstrap.min.css'
import GeneralInfo from "./components/GeneralInfo";
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import Header from './components/Header';
import Section from './components/Section';
import { useState } from 'react';

export default function App() {
    const [educationList, setEducationList] = useState([
        { id: 1, university: "", degree: "", location: "", graduationDate: "" }
    ])
    const [experienceList, setExperienceList] = useState([])

    function updateEducationCard(field, id, newValue) {
        setEducationList(educationList.map(card => 
            card.id === id ? { ...card, [field]: newValue } : card
        ))
    }

    function addExperienceCard() {
        const newCard = { id: Date.now() }
        setExperienceList([...experienceList, newCard])
        console.log('New experience card added.')
    }

    const addEducationCard = () => {
        const newCard = { id: Date.now(), university: "", degree: "", location: "", graduationDate: "" }
        setEducationList([...educationList, newCard])
        console.log("New education card added.")
    }

    function removeEducationCard(id) {
        setEducationList(educationList.filter(card => card.id !== id))
    }

    function removeExperienceCard(id) {
        setExperienceList(experienceList.filter(card => card.id !== id))
    }

    return (
        <>
            <Header />
            <div className="cv-container">
                <GeneralInfo />
                <Section
                    sectionTitle="Education" 
                    cardList={educationList} 
                    addCard={addEducationCard} 
                    removeCard={removeEducationCard} 
                    CardComponent={EducationCard}
                    updateCard={updateEducationCard}
                />
                <Section
                    sectionTitle="Experience" 
                    cardList={experienceList} 
                    addCard={addExperienceCard} 
                    removeCard={removeExperienceCard} 
                    CardComponent={ExperienceCard}
                />
            </div>
        </>
    )
}