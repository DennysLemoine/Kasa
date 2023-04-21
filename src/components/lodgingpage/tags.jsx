import React from "react";
import lodging from "../../pages/lodging/lodging.css"

function Tags({tags}) {

    const listTags = tags.map((tag, index) =>
        <li className='tagLi' key={index}>{tag}</li>
    );

    return (
        <ul className='tagsUl'>
            {listTags}
        </ul>
    )
}

export default Tags