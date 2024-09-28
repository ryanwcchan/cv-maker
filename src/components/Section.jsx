import AddButton from "./buttons/AddButton"
import Hoverable from "./Hoverable"

export default function Section({
  sectionTitle,
  cardList,
  addCard,
  removeCard,
  CardComponent,
  updateCard
}) {
  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-heading">
          {sectionTitle}
        </h1>
        <AddButton onClick={addCard} />
      </div>
      
      <div className="card-container">
        {cardList.map((card) => (
          <Hoverable key={card.id} handleDelete={() => removeCard(card.id)} >
            <div>
              <CardComponent 
                id={card.id}
                cardData={cardList}
                updateCard={updateCard}                 
              />
            </div>
          </Hoverable>
        ))}
      </div>
    </div>
  )
}
