import {useState} from "react";
import informations from "./informations.css";
import informationImg from '../../assets/Paysage02.png'
import arrowImg from '../../assets/Arrow.svg'

function Informations() {
    const [showDiv, setShowDiv] = useState([false, false, false, false]);
    const [rotateImg, setRotateImg] = useState([false, false, false, false]);

    const toggleDiv = (index) => {
        const newShowDiv = [...showDiv];
        newShowDiv[index] = !newShowDiv[index];
        setShowDiv(newShowDiv);
    };

    const rotateImage = (index) => {
        const newRotateImg = [...rotateImg];
        newRotateImg[index] = !newRotateImg[index];
        setRotateImg(newRotateImg)
    };

    return (
        <div>
            <div className='divContainer'>
                <img className='imgContainer' src={informationImg} alt=""/>
            </div>
            <section className='sectionScroll'>
                <div className='show-hide'>
                    <div className={`scrollContainer ${rotateImg[0] ? 'rotate' : ''}`} onClick={() => {toggleDiv(0); rotateImage(0)}} style={{marginBottom: showDiv[0] ? 0 : "20px"}}>
                        <p>Fiabilité</p>
                        <img className='arrowNav' src={arrowImg} alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
                    </div>
                    <div className={`scrollContent ${showDiv[0] ? "display" : ""}`} >
                        <p className='scrollText'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les
                            photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
                            par nos équipes.</p>
                    </div>
                </div>
                <div className='show-hide'>
                    <div className={`scrollContainer ${rotateImg[1] ? 'rotate' : ''}`} onClick={() => {toggleDiv(1); rotateImage(1)}} style={{marginBottom: showDiv[1] ? 0 : "20px"}}>
                        <p>Respect</p>
                        <img className='arrowNav' src={arrowImg} alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
                    </div>
                    <div className={`scrollContent ${showDiv[1] ? "display" : ""}`}>
                        <p className='scrollText'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                            comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                            notre plateforme.</p>
                    </div>
                </div>
                <div className='show-hide'>
                    <div className={`scrollContainer ${rotateImg[2] ? 'rotate' : ''}`} onClick={() => {toggleDiv(2); rotateImage(2)}} style={{marginBottom: showDiv[2] ? 0 : "20px"}}>
                        <p>Service</p>
                        <img className='arrowNav' src={arrowImg} alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
                    </div>
                    <div className={`scrollContent ${showDiv[2] ? "display" : ""}`}>
                        <p className='scrollText'>Nos équipes se tiennent à votre disposition pour vous fournir une
                            expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
                <div className='show-hide'>
                    <div className={`scrollContainer ${rotateImg[3] ? 'rotate' : ''}`} onClick={() => {toggleDiv(3); rotateImage(3)}} style={{marginBottom: showDiv[3] ? 0 : "20px"}}>
                        <p>Sécurité</p>
                        <img className='arrowNav' src={arrowImg} alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
                    </div>
                    <div className={`scrollContent ${showDiv[3] ? "display" : ""}`}>
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