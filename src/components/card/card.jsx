import card from "./card.css";

function Card({data}) {

    return (
        <section className='cardContainer'>
            {data.map((logements) => (
                <a href='../lodging/${logements.id}' key={logements.id} className="cardWrapper">
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