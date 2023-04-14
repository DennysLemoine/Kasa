import data from '../../logements.json'
import card from "./card.css";

function Card() {
    return (
        <div>
            {data.map((logements) => (
                <a key={logements.id} className="cardWrapper">
                    <article>
                        <figure className="figureCard">
                            <img className="imageCard" src={logements.cover} alt=""/>
                            <figcaption className="figcaptionCard">
                                <h2 className="cardTitle">{logements.title}</h2>
                            </figcaption>
                        </figure>
                    </article>
                </a>
            ))}
        </div>
    )
}

export default Card