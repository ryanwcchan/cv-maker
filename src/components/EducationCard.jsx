import { useState } from "react"
import EditableField from "./EditableField"

export default function EducationCard() {
  const [inputValue, setInputValue] = useState({
    university: "University"
  })

  function updateCard(field, value) {
    setInputValue((prevState) => ({
      ...prevState, [field]: value
    }))
  }

  return (
    <div className="education-card">
      <div className="card-header">
        <div>
          <h1>
            <EditableField
              value={inputValue.university}
              onSave={(newValue) => updateCard("university", newValue)}
              placeholder={"University"}
            />
          </h1>
          <h2>Degree</h2>
        </div>
        <div>
          <h1>City, State</h1>
          <h2>Graduation Date: Date</h2>
        </div>
      </div>
    </div>
  )
}
