import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      //user1: ""
    }
  }
  componentDidMount(){
//let player1 = this.setState({user1:"🎃"})
  }
  handleGamePlay = (index) => {
    const { squares } = this.state
    
      console.log(this.state.squares);
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
            handleGamePlay={this.handleGamePlay}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
