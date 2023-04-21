import React from "react";
import {useState} from "react";

import informationImg from '../../assets/Paysage02.png'
import arrowImg from '../../assets/Arrow.svg'

import CollapseContent from '../../components/collapse/collapse'

function Informations(props) {

    return (
        <>
            <div className='divContainer'>
                <img className='imgContainer' src={informationImg} alt="Paysage de montages"/>
            </div>
            <div className='sectionScroll'>
                <CollapseContent title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            </div>
            <div className='sectionScroll'>
                <CollapseContent title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            </div>
            <div className='sectionScroll'>
                <CollapseContent title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            </div>
            <div className='sectionScroll'>
                <CollapseContent title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
            <div className='collapseContainer'>
            </div>
        </>
    )
}

export default Informations