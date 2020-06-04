import React from 'react'

export default function IdCard(props) {

    return (
        <div className='card-container-flex'>

            <img src={props.picture} alt="" />
            <div>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth: </strong> {props.birth.toLocaleDateString()}</p>
            </div>
        </div>
    )
}


