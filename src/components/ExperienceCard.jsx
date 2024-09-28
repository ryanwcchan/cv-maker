import EditableField from "./EditableField"

export default function ExperienceCard({ id, cardData, updateCard}) {
  return (
    <div className="experience-card">
        <div className="card-header">
            <div>
                <h1>
                    <EditableField 
                        value={cardData.company}
                        onSave={(newValue) => updateCard("company", id, newValue)}
                        placeholder={"Company"}
                    />
                </h1>
                <h1>
                    <EditableField 
                        value={cardData.location}
                        onSave={(newValue) => updateCard("location", id, newValue)}
                        placeholder={"City, State"}
                    />
                </h1>
            </div>
            <div>
                <h2>
                    <EditableField 
                        value={cardData.jobTitle}
                        onSave={(newValue) => updateCard("location", id, newValue)}
                        placeholder={"Job title"}
                    />
                </h2>
                <h2>
                    <EditableField 
                        value={cardData.startFinish}
                        onSave={(newValue) => updateCard("location", id, newValue)}
                        placeholder={"Start Date - Finish Date"}
                    />
                </h2>
            </div>
        </div>
        <div className="card-content">
            <div className="bullet-points">
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
            </div>
        </div>
    </div>
  )
}
