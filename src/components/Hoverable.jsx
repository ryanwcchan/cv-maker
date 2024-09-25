import { useState } from "react";
import DeleteButton from './DeleteButton'

export default function Hoverable({ children, handleDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <div
        className="hoverable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}    
    > 
        {isHovered && (
            <DeleteButton onClick={handleDelete} />
        )}
        {children}
    </div>
  )
}
