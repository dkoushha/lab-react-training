import React from 'react'

export default function Random(props) {
    let number = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    return (
        <div className='card-container-flex'>
            <p>
                Random value between {props.min}and {props.max} => {number(props.min, props.max)}
            </p>
        </div>
    )
}
