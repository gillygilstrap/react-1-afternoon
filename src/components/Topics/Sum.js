import React, {Component} from 'react'

class Sum extends Component {

    constructor() {
        super()
        this.state = {
            number1: '',
            number2: '',
            sum: null
        }
        this.numberUpdater1 = this.numberUpdater1.bind(this)
        this.numberUpdater2 = this.numberUpdater2.bind(this)
        this.numSummerUpper = this.numSummerUpper.bind(this)
    }

    numberUpdater1(e) {
        this.setState({
            number1: e.target.value,
            
        })
    }
    numberUpdater2(e) {
        this.setState({
            number2: e.target.value,
            
        })
    }


    numSummerUpper() {
        let num1 = +this.state.number1
        let num2 = +this.state.number2
        let sumy = num1 + num2

        this.setState ({
            sum: sumy
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={this.numberUpdater1} value={this.state.number1} className="inputLine" />
                <input onChange={this.numberUpdater2} value={this.state.number2} className="inputLine" />
                <button onClick={this.numSummerUpper} className="confirmationButton"></button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum


