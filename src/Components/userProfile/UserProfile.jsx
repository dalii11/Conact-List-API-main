import React, { Fragment, } from 'react';
import './userProfile.css';

function UserProfile({element}) {
    console.log(element)
    return (
        <Fragment>
            <div className="userProfile">
                <p>{element.id}°:</p>
                {element.name}
                <h5>{element.phone}</h5>
                <a href={element.website} target='blanc'>Visit {element.name}'s website</a>
            </div>
        </Fragment>
    );
}

export default UserProfile
