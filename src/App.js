import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //empty squares to be displayed
      squares: [null, null, null, null, null, null, null, null, null],
      //the symbol for player 1
      user1: "🎃",
      //the symbol for player 2
      user2: "👻",
      //a counter to determine which player symbol to use
      clickCount: 0,
      //an array to put a value in each specifil square disabling pointer events.
      isActive: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
    }
  }
  componentDidMount(){
//let player1 = this.setState({user1:"🎃"})
  }

  handleGamePlay = (index) => {
    //destructured objects for faster access and shorter typing
    const { squares, user1, user2,clickCount, isActive} = this.state
      //whenever handleGamePlay runs, clickcount+1 -> changes the user symbol
      this.setState({clickCount: clickCount +1})
      //conditional to check if user 1 or user 2, also disables clicked square
      if(clickCount%2 === 0){
      squares[index] = user1
      isActive[index] = 'none'
      this.setState({squares: squares})
      this.setState({isActive: isActive})
      // this.setState({isActive: isActive})
    }else if(clickCount%2 !== 0){
      squares[index] = user2
      isActive[index] = 'none'
      this.setState({squares: squares})
      this.setState({isActive: isActive})
    }
  }



  render() {
    console.log(this.state.clickCount);
    console.log(this.state.isActive);
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
            isActive={this.state.isActive}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
