import React from 'react'

export default function BoxColor(props) {
    let r = props.r;
    let g = props.g;
    let b = props.b;
    let color = `rgb(${r},${g},${b})`
    console.log("outPut: BoxColor -> color", color)
    let hex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return (
        <div className='color-container-flex' style={{ backgroundColor: color }}>
            <p>rgb({r},{g},{b})<br /> {hex(r, g, b)}</p>
        </div>
    )
}
