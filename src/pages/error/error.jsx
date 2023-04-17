import error from './error.css'
import React from "react";
function Error() {
    return(
        <div className='divError'>
            <p className='error404'>404</p>
            <p className='errorP'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/'>Retourner sur la page d'accueil</a>
        </div>
    )
}

export default Error