import React from 'react';


function TeamMember ({ details }) {
    return(
        <div className='member-container'>
            <h3>Name:{details.name}</h3>
            <h4>Email:{details.email}</h4>
            <h4>Role:{details.role}</h4>
        </div>



    )
}

export default TeamMember