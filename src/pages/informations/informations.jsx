import informations from "./informations.css";
import informationImg from '../../assets/Paysage02.png'

function Informations() {
    return (
        <div>
            {/*divContainer vient de Home.css car même paramètres*/}
            <div className='divContainer'>
                <img className='imgContainer' src={informationImg} alt=""/>
            </div>
            <section className='sectionScroll'>
                <div>
                    <div className='scrollContainer'>
                        <p>Fiabilité</p>
                    </div>
                    <div className='scrollContent'>
                        <p className='scrollText'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                </div>

                <div className='scrollContainer'>
                    <p>Respect</p>
                    <div className='scrollContent'>
                        <p className='scrollText'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                            comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                            notre plateforme.</p>
                    </div>
                </div>
                <div className='scrollContainer'>
                    <p>Service</p>
                    <div className='scrollContent'>
                        <p className='scrollText'>Nos équipes se tiennent à votre disposition pour vous fournir une
                            expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
                <div className='scrollContainer'>
                    <p>Sécurité</p>
                    <div className='scrollContent'>
                        <p className='scrollText'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                            pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos
                            équipes de vérifier que les standards sont bien respectés. Nous organisons également des
                            ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Informations