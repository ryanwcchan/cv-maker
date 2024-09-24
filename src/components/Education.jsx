import AddButton from "./AddButton"
import EducationCard from "./EducationCard"

export default function Education(props) {

    const { educationList, addEducationCard } = props
    return (
        <div className="education-container">
            <h1 className="section-heading">
                Education
            </h1>
            <AddButton onClick={addEducationCard} />

            {educationList.map((card) => {
                return (
                    <EducationCard 
                        key={card.id} 
                        id={card.id} 
                    />
                )
            })}
        </div>
    )
}