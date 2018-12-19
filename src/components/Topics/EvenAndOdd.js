import React, {Component} from 'react'

class EvenAndOdd extends Component {
 
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.userInputUpdater = this.userInputUpdater.bind(this)
        this.arrayUpdater = this.arrayUpdater.bind(this)
    }
    
userInputUpdater(e) {
    // console.log(e)
this.setState({
    userInput: e.target.value
    // console.log
    
})
// console.log(this.state.userInput)
}

arrayUpdater() {
   let newArray = []
   let evens =[]
   let odds = []
   newArray.push(this.state.userInput)
   newArray = newArray[0].split(',')
   let secondArray = newArray.map(elem => {
        return +elem
   })

   for (let i=0;i<secondArray.length;i++) {
       if (secondArray[i]%2 === 0) {
        evens.push(secondArray[i])
       } else (odds.push(secondArray[i]))
       
   }
   console.log(odds)

    this.setState({
      evenArray: evens,
      oddArray: odds,
      userInput: ''
  })
}

    render() {
        const {evenArray, oddArray, userInput} = this.state
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input onChange={this.userInputUpdater} value={userInput} className="inputLine"/>
            <button onClick={this.arrayUpdater} className="confirmationButton">Click Me!!</button>
            <span className="resultsBox">{JSON.stringify(evenArray)}</span>
            <span className="resultsBox">{JSON.stringify(oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd