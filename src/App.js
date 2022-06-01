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
      isDisabled: 'auto',
      gameWin: false,
    }
  }
  calculateWinner = (index) => {
const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
];
const {squares, clickCount} = this.state
  for(let i = 0; i < winningLines.length; i++){
    const [a ,b, c] = winningLines[i]
    if(squares[a] && squares[a]=== squares[b] && squares[a]=== squares[c]){
      if(clickCount%2 === 0){
        this.setState({isActive: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']})
        this.setState({gameWin: true})
        alert("Player 1 has won")

      }else if(clickCount%2 !== 0){
        this.setState({isActive: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']})
        this.setState({gameWin: true})
        alert("Player 2 has won")
      }
    }
    }
  }
  refreshPage = () => {
    return window.location.reload();
}

  outOfClicks = () => {
    const { clickCount } = this.state;
    if(clickCount === 8 && this.state.gameWin === false){
        alert('no more squares')
      }
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
    this.outOfClicks()
  }



  render() {
    console.log(this.state.clickCount);
    return(
      <>
        <h1>Tic Tac Toe
        <button onClick ={this.refreshPage}>Restart</button></h1>
        <div className= "gameBoard" style={{pointerEvents: this.state.isDisabled}}>
          {this.state.squares.map((value, index)=>{
            return(
              <Square
            value={value}
            key={index}
            index={index}
            handleGamePlay={this.handleGamePlay}
            isActive={this.state.isActive}
            isDisabled= {this.state.isDisabled}
            calculateWinner= {this.calculateWinner}
            outOfClicks={this.state.outOfClicks}
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
