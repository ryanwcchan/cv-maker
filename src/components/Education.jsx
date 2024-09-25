import AddButton from "./AddButton"
import EducationCard from "./EducationCard"

export default function Education(props) {

    const { educationList, addEducationCard } = props
    return (
        <div className="education-container">
            <div className="section-header">
                <h1 className="section-heading">
                    Education
                </h1>
                <AddButton onClick={addEducationCard} />
            </div>
            
            <div className="card-container">
                {educationList.map((card) => {
                    return (
                        <EducationCard 
                            key={card.id} 
                            id={card.id} 
                        />
                    )
                })}
            </div>
        </div>
    )
}