import React from 'react';
function SiteInfo({ id, link, image }){
    return (
        <div>
            <h1>{id}</h1>
            <h1>{link}</h1>
            <h1><img src={image} alt={link}/></h1>
        </div>
    )
}
export default SiteInfo;