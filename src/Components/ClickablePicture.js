import React, { Component } from 'react'

export class ClickablePicture extends Component {
    state = {
        clickedImg: false
    }
    changeImgHandler = () => {
        this.setState({
            clickedImg: !this.state.clickedImg
        })
    }
    render() {
        return (
            <div>
                <img onClick={this.changeImgHandler} width='200px' src={!this.state.clickedImg ? this.props.img : this.props.imgClicked} alt="" />
            </div>
        )
    }
}

export default ClickablePicture

