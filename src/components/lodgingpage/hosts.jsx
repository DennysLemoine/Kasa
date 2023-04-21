import React from "react";
import lodging from "../../pages/lodging/lodging.css"

function Hosts({host}) {

    const hostNameArray = host.name.split(" ");

    return(
        <div className='hostContainer'>
            <div className='hostNameContainer'>
                <p className='hostName'>{hostNameArray[0]}</p>
                <p className='hostName'>{hostNameArray[1]}</p>
            </div>
            <img src={host.picture} alt="Photo du propiètaire" className='hostPicture'/>
        </div>
    )
}

export default Hosts