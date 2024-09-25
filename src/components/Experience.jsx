import AddButton from "./AddButton"
import ExperienceCard from "./ExperienceCard"

export default function Experience(props) {
    const { experienceList, addExperienceCard } = props

    return (
        <>
        <div className="experience-container">
            <div className="section-header">
                <h1 className="section-heading">
                    Experience
                </h1>
                <AddButton onClick={addExperienceCard} />
            </div>
            
            <div className="card-container">
                {experienceList.map((card) => {
                    return (
                        <ExperienceCard 
                            key={card.id}
                            id={card.id}
                        />
                    )
                })}
            </div>
        </div>   
        </>
    )
}