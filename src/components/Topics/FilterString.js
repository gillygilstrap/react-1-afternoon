import React, {Component} from 'react'

class FilterString extends Component {

    constructor() {
        super()
        this.state = {
            unFilteredArray: ['Google', 'Facebook', 'Instagram', 'Pinterest', 'Twitter', 'Yahoo'],
            userInput: '',
            filteredArray: []
        }
        this.userInputUpdater = this.userInputUpdater.bind(this)
        this.stringChecker = this.stringChecker.bind(this)
    }

    userInputUpdater(e) {
        this.setState({
            userInput: e.target.value
        })
        // console.log(this.state.userInput)
    }

    stringChecker(e) {
        let newArray = [];
        let x = this.state.unFilteredArray
        let unCheckedArray = x.slice(this.state.unFilteredArray);
        console.log(unCheckedArray)
        let stringy = this.state.userInput;
        for (let i = 0; i < unCheckedArray.length; i++) {
            if (!unCheckedArray[i].includes(stringy)) {
                newArray.push(unCheckedArray[i])
            } 

            
        }
        console.log(newArray)
            this.setState({
                filteredArray: newArray,
                userInput: ''
            })
    } 

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"></span>
                <input onChange={this.userInputUpdater} value={this.state.userInput} className="inputLine" />
                <button onClick={this.stringChecker} className="confirmationButton">Clean it Up</button>
                <span className="resultsBox filterStringRB">{this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterString



