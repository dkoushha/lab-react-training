import React from 'react';


let stars = (props) => {
    let number = props.children;
    let ratingNumber = Number(Number(number).toFixed());
    let starArr = []
    let star;
    console.log('something');
    for (let i = 1; i <= 5; i++) {
        if (i <= ratingNumber) {
            star = <p className='ratingStars' key={i}>&#9733;</p>
            starArr.push(star)
        }
        if (i > ratingNumber) {
            star = <p className='ratingStars' key={i}>&#9734;</p>
            starArr.push(star)
        }
    }
    return starArr
}

export default function Rating(props) {
    return (
        <div style={ratingContainer}>
            {stars(props)}
        </div>
    )

}
const ratingContainer = {
    display: 'flex',
    flexDirection: 'row'
}
