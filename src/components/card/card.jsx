import card from "./card.css";
import {Link} from "react-router-dom";

function Card({data}) {

    return (
        <section className='cardContainer'>
            {data.map((logements) => (
                <Link to={'../../lodging/'+logements.id} key={logements.id} className="cardWrapper">
                    <article className="articleWrapper">
                        <figure className="figureCard">
                            <img className="imageCard" src={logements.cover} alt="Miniature du logements"/>
                            <figcaption className="figcaptionCard">
                                <h2 className="cardTitle">{logements.title}</h2>
                            </figcaption>
                        </figure>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default Card