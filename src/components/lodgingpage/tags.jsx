import React from "react";
import lodging from "../../pages/lodging/lodging.css"

function Tags({tags}) {

    const listTags = tags.map((tag, index) =>
        <li key={index}>{tag}</li>
    );

    return (
        <ul>
            {listTags}
        </ul>
    )
}

export default Tags