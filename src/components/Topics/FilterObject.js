import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super()
        this.state = {
            unFilteredArray: [
            {band: 'The Beatles', singer: 'Paul McCartney', guitarist: 'George Harrison', drummer: 'Ringo'},
            {band: 'The Kinks', singer: 'Ray Davies', guitarist: 'Dave Davies'},
            {band: 'Metallica', singer: 'James Hetfield', guitarist: 'Kirk Hammett'},
            {band: 'Soundgarden', singer: 'Chris Cornell', guitarist: 'Kim Thayil'},
            {band: 'Led Zepplin', singer: 'Robert Plant', guitarist: 'Jimmy Page', drummer: 'John Bohnham'}],
            userInput: '',
            filteredArray: []
        }
        this.userInputUpdater = this.userInputUpdater.bind(this)
        this.noDrummerGetter = this.noDrummerGetter.bind(this)
    }

    userInputUpdater(e) {
    this.setState({
        userInput: e.target.value
            
    })
    console.log(this.state.userInput)
}

    noDrummerGetter(e) {
       let newArray = this.state.unFilteredArray
        // noDrummerArray = []
        let filterVar = newArray.filter(elem => !elem.drummer)

        this.setState({
            filteredArray: filterVar
        })
        // console.log(this.state.filteredArray)
    }


    render() {
        const userInput = this.state.userInput
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input onChange={this.userInputUpdater} value={userInput} className="inputLine" />
                <button onClick={this.noDrummerGetter} className="confirmationButton">Lose the Drummers</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject


