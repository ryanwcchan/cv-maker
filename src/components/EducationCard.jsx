import { useState } from "react"
import EditableField from "./EditableField"

export default function EducationCard({ id, cardData, updateCard }) {

  return (
    <div className="education-card">
      <div className="card-header">
        <div className="card-top-row">
          <h1>
            <EditableField
              value={cardData.university}
              onSave={(newValue) => updateCard("university", id, newValue)}
              placeholder={"University"}
            />
          </h1>
          <h2>
            <EditableField
              value={cardData.degree}
              onSave={(newValue) => updateCard("degree", id, newValue)}
              placeholder={"Degree"}
            />
          </h2>
        </div>
        <div className="card-bottom-row">
          <h1>
            <EditableField
                value={cardData.location}
                onSave={(newValue) => updateCard("location", id, newValue)}
                placeholder={"City, State"}
            />
          </h1>
          <h2>
            <EditableField
                value={cardData.graduationDate}
                onSave={(newValue) => updateCard("graduationDate", id, newValue)}
                placeholder={"Graduation Date"}
            />
          </h2>
        </div>
      </div>
    </div>
  )
}
