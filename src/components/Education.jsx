import EducationCard from "./EducationCard"
import Section from "./Section"

export default function Education(props) {
    const { educationList, addEducationCard, removeEducationCard } = props

    return (
        <Section
            sectionTitle="Education" 
            cardList={educationList} 
            addCard={addEducationCard} 
            removeCard={removeEducationCard} 
            CardComponent={EducationCard}
        />
    )
}