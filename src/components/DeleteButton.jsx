export default function DeleteButton({ onClick }) {
  return (
    <>
      <button className="delete-btn" onClick={onClick} >
          <i className="fa-solid fa-trash"></i>
      </button>
    </>
    
  )
}
