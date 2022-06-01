import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      user1: null
    }
  }
  componentDidMount(){

  }
  handleGamePlay = (index) => {
    const { squares } = this.state
    if(index === user1){
      squares[index] = "🎃"
      this.setState({squares: squares})
    }



  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className= "gameBoard" >
          {this.state.squares.map((value, index)=>{
            return(
              <Square
            value={value}
            key={index}
            index={index}
            handleGameplay={this.handleGameplay}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
