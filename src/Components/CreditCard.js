import React from 'react'

export default function CreditCard(props) {
    let expirationYear = props.expirationYear % 100
    let imgSrc;
    let expirationMonth;
    if (props.type === 'visa') {
        imgSrc = '../img/visa.png'
    } else {
        imgSrc = '../img/master-card.svg'
    }
    let cardNumber = props.number.slice(-4)
    if (props.expirationMonth < 10) {
        expirationMonth = "0" + props.expirationMonth;
        console.log(typeof (expirationMonth));
    } else {
        expirationMonth = props.expirationMonth;
    }
    return (
        <div className='creditCard-container-flex' style={{ backgroundColor: props.bgColor, color: props.color }}>
            <img style={creditCardImg} src={imgSrc} alt="" />
            <p style={{ fontSize: '26px' }}><span>&#8226; &#8226; &#8226; &#8226; &nbsp; &#8226; &#8226; &#8226; &#8226; &nbsp;
                 &#8226; &#8226; &#8226; &#8226; &nbsp;</span>
                <span>{cardNumber}</span></p>
            <p>Expires {expirationMonth}/{expirationYear} &nbsp; &nbsp; {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
const creditCardImg = {
    width: "60px",
    alignSelf: 'flex-end'
}



// type = "Visa"
// number = "0123456789018845"
// expirationMonth = { 3}
// expirationYear = { 2021}
// bank = "BNP"
// owner = "Maxence Bouret"
// bgColor = "#11aa99"
// color = "white" />