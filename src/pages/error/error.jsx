import React from "react";
import error from './error.css'

function Error() {
    return(
        <div className='divError'>
            <h2 className='error404'>404</h2>
            <p className='errorP'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/'>Retourner sur la page d'accueil</a>
        </div>
    )
}

export default Error