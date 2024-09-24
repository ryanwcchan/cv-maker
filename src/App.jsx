import 'bootstrap/dist/css/bootstrap.min.css'
import GeneralInfo from "./components/GeneralInfo";
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
    const [educationList, setEducationList] = useState([])
    // const [experience, setExperience] = useState([])

    const addEducationCard = () => {
        const newCard = { id: educationList.length + 1 }
        setEducationList([...educationList, newCard])
        console.log("New card added")
    }

    return (
        <>
            <Header />
            <div className="cv-container">
                <GeneralInfo />
                <Education educationList={educationList} addEducationCard={addEducationCard} />
                <Experience />
            </div>
        </>
    )
}