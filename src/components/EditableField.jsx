import { useState } from "react"

export default function EditableField({ value, onSave, placeholder }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(value)

    const handleSave = () => {
        setIsEditing(false)
        onSave(newValue || "")
    }

    return isEditing ? (
        <input 
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onBlur={handleSave}
            autoFocus
            className="editable-input"
            placeholder={placeholder}
        />
    ) : (
        <span 
            onClick={() => setIsEditing(true)}
            className={value ? "normal-text" : "placeholder-text"}      
        >
            {value || placeholder}
        </span>
    )
}
