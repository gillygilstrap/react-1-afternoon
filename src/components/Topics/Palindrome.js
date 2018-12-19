import React, {Component} from 'react'

class Palindrome extends Component {

    constructor() {
        super()
        this.state = {
            palindrome : '',
            userInput : ''
        }

        this.userInputUpdater = this.userInputUpdater.bind(this)
        this.palindromeChecker = this.palindromeChecker.bind(this)
    }

    userInputUpdater(e) {

        this.setState({
            userInput: e.target.value
            
        })
        // console.log(this.state.userInput)
    }

    palindromeChecker(e) {
        let returnTrue; 
        let returnFalse;
        let str = this.state.userInput
        let splitString = str.split('')
        let reverseArray = splitString.reverse()
        let joinArray = reverseArray.join('')
        if (str === joinArray) {
            this.setState({palindrome: "It's a Palindrome!!"})
        } else (this.setState({palindrome: "Bro, that's not a palindrome"}))
        
        this.setState({
            userInput: ''
        })
        }




    render() {
        const userInput = this.state.userInput
        const palindrome = this.state.palindrome
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={this.userInputUpdater} value={userInput} className="inputLine"/>
                <button onClick={this.palindromeChecker} className="confirmationButton">Is it a Palindrome??</button>
                <span className="resultsBox">{palindrome}</span>
            </div>
        )
    }
}

export default Palindrome


