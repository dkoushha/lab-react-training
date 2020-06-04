import React from 'react';
import Rating from './Rating ';


export default function DriverCard(props) {
    return (
        <div style={driverCardContainer}>
            <img width='200px' height='200px' style={{ borderRadius: '50%' }} src={props.img} alt="" />
            <div className='DriverCardContent'>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <h4>{props.car.model}-{props.car.licensePlate}</h4>
            </div>
        </div>
    )
}

const driverCardContainer = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'darkblue',
    color: 'white',
    justifyContent: 'center',
    alignItems: "center",
    padding: '20px',
    borderRadius: '10px',
}
