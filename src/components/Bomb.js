// Bomb Component Code Goes Here
import React from "react"

class Bomb extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let text
    if(parseInt(this.state.secondsLeft)>0){
      text = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      text = "Boom!"
      }
    return (<p>{text}</p>)
  }
}

export default Bomb
