export default function AddButton(props) {
  const { onClick } = props;

  return (
    <>
      <button className="add-btn" onClick={onClick} >
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
    
  )
}
