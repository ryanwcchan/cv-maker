import ExperienceCard from "./ExperienceCard"
import Section from "./Section"

export default function Experience(props) {
    const { experienceList, addExperienceCard, removeExperienceCard } = props

    return (
        <Section
            sectionTitle="Experience" 
            cardList={experienceList} 
            addCard={addExperienceCard} 
            removeCard={removeExperienceCard} 
            CardComponent={ExperienceCard}
        />
    )
}