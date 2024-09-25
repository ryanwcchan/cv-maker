import AddButton from "./AddButton"
import EducationCard from "./EducationCard"
import Hoverable from "./Hoverable"

export default function Education(props) {

    const { educationList, addEducationCard, removeEducationCard } = props
    return (
        <div className="education-container">
            <div className="section-header">
                <h1 className="section-heading">
                    Education
                </h1>
                <AddButton onClick={addEducationCard} />
            </div>
            
            <div className="card-container">
                {educationList.map((card) => (
                        <Hoverable key={card.id} handleDelete={() => removeEducationCard(card.id)} >
                            <div>
                                <EducationCard 
                                    id={card.id}
                                />
                            </div>
                        </Hoverable>
                    )
                )}
            </div>
        </div>
    )
}