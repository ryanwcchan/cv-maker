import EditableField from "./EditableField"
import Section from './Section'

export default function ExperienceCard({ id, cardData, updateCard}) {
    return (
    <div className="experience-card">
        <div className="card-header">
            <div>
                <h1>
                    <EditableField
                        value={cardData.company}
                        onSave={(newValue) => updateCard("company", id, newValue)}
                        placeholder={"Company "}
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
                <li>
                    <EditableField
                        value={cardData.firstBullet}
                        onSave={(newValue) => updateCard("firstBullet", id, newValue)}
                        placeholder={"Bullet Point 1"}
                    />
                </li>
                <li>
                    <EditableField
                        value={cardData.secondBullet}
                        onSave={(newValue) => updateCard("secondBullet", id, newValue)}
                        placeholder={"Bullet Point 2"}
                    />
                </li>
                <li>
                    <EditableField
                        value={cardData.thirdBullet}
                        onSave={(newValue) => updateCard("thirdBullet", id, newValue)}
                        placeholder={"Bullet Point 3"}
                    />
                </li>
            </div>
        </div>
    </div>
  )
}
