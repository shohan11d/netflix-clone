import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef } from 'react'



function TitleCards() {
    const cardsRef = useRef();
const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
}
useEffect(() => {
  cardsRef.current.addEventListener('wheel', handleWheel)});
    return (
        <div className="title-cards">
            <h2>Popular on Netflix</h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card,index)=>{
                    return <div className="card" key={index}>
                        <img src={card.image} alt={card.title}/>
                        <p>{card.name}</p>

                    </div>
                })}
            </div>
            
        </div>
    )
}

export default TitleCards
