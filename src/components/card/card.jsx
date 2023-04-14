import data from '../../logements.json'
import card from "./card.css";

function Card() {
    return (
        <section className='cardContainer'>
            {data.map((logements) => (
                <a key={logements.id} className="cardWrapper">
                    <article className="articleWrapper">
                        <figure className="figureCard">
                            <img className="imageCard" src={logements.cover} alt=""/>
                            <figcaption className="figcaptionCard">
                                <h2 className="cardTitle">{logements.title}</h2>
                            </figcaption>
                        </figure>
                    </article>
                </a>
            ))}
        </section>
    )
}

export default Card