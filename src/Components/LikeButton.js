import React, { Component } from 'react';
import _ from 'lodash';


export class LikeButton extends Component {
    state = {
        colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        count: 0,
        backgroundColor: 'purple'
    }

    increaseLikeHandler = () => {
        this.setState({
            count: this.state.count + 1,
            backgroundColor: _.sample(this.state.colors)
        })
    }

    render() {
        return (
            <div style={{
                padding: '10px 30px',
                border: '1px solid black',
                display: 'inline-block',
                color: 'white',
                fontSize: "25px",
                backgroundColor: this.state.backgroundColor
            }} onClick={this.increaseLikeHandler}>
                {this.state.count} like
            </div>
        )
    }
}



export default LikeButton
