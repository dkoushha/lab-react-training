import React from 'react'

export default function Greetings(props) {
    let name = props.children;
    let text;
    switch (props.lang) {
        case 'ar':
            text = `${name} مرحبا`
            break;
        case 'de':
            text = `Hallo ${name}`
            break;
        case 'fr':
            text = `Bonjour ${name}`
            break;
        default:
            text = `Hey ${name}`
            break;
    }
    return (
        <div className='card-container-flex'>
            <p>{text} </p>
        </div>
    )
}
