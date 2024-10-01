import { useState } from "react"
import EditableField from "./EditableField"

export default function GeneralInfo() {
    const [info, setInfo] = useState(
        { name: "John Smith", subInfo: "johnsmith@email.com | (123)-456-7890 | 123 Main St, Anytown, USA 12345"}
    )

    function handleChange(field, value) {
        setInfo((prevInfo) => ({
            ...prevInfo, 
            [field]: value
        }))
            
    }

    return (
        <>
            <div className="general-info-container">
                <h1 className="cv-name">
                    <EditableField 
                        value={info.name}
                        onSave={(newValue) => handleChange("name", newValue)}
                        placeholder={"John Smith"}
                    />
                </h1>
                <div className="contact-info">
                    <h2>
                        <EditableField 
                            value={info.subInfo}
                            onSave={(newValue) => handleChange("subInfo", newValue)}
                            placeholder={"johnsmith@email.com | (123)-456-7890 | 123 Main St, Anytown, USA 12345"}
                        />
                    </h2>
                </div>
            </div>
        </>
    )
}