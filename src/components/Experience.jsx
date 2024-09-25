import AddButton from "./AddButton"
import ExperienceCard from "./ExperienceCard"
import Hoverable from "./Hoverable"

export default function Experience(props) {
    const { experienceList, addExperienceCard, removeExperienceCard } = props

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
                {experienceList.map((card) => (
                        <Hoverable key={card.id} handleDelete={() => removeExperienceCard(card.id)} >
                            <div>
                                <ExperienceCard 
                                    id={card.id}
                                />
                            </div>
                        </Hoverable>
                    )
                )}
            </div>
        </div>   
        </>
    )
}