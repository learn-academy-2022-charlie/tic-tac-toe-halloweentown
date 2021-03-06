import React, { Component } from 'react'

class Square extends Component {

  handleClick = () => {
    //alert(this.props.index)
    this.props.handleGamePlay(this.props.index)
    this.props.calculateWinner()
  }
  render() {
    return(
      <>
      <div style={{pointerEvents: this.props.isDisabled}}>
        <div className="square"
        onClick={this.handleClick} style={{pointerEvents: this.props.isActive[this.props.index]}}
        >
          {this.props.value}
        </div>
      </div>
      </>
    )
  }
}
export default Square
