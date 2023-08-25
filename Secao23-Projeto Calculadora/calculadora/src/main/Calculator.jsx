import React from "react"
import './Calculator.css'

import Button from "../components/Button"
import Display from "../components/Display"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends React.Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if(this.state.current === 0 && this.state.operation !== '='){
            this.setState({ operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            let zeroDivision = false

            const values = [...this.state.values]
            if(currentOperation === '/') {
                values[0] = values[0] / values[1]
            }else if(currentOperation === '-') {
                values[0] = values[0] - values[1]
            }else if(currentOperation === '*') {
                values[0] = values[0] * values[1]
            }else if(currentOperation === '+') {
                values[0] = values[0] + values[1]
            }
            this.setState({
                displayValue: zeroDivision ? 'Err' : `${values[0]}`,
                operation: equals ? currentOperation : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values
             })
        }
        console.log(this.state.operation)
    }

    addDigit(digit) {
        if(digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = (this.state.displayValue === '0' && digit !== '.') || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ 
            displayValue: displayValue === '.' ? '0.' : displayValue, 
            clearDisplay: false
        })

        const i = this.state.current
        const newValue = displayValue === '.' ? 0 : parseFloat(displayValue)
        const values = [...this.state.values]
        values[i] = newValue
        this.setState({ values })
    }

    render(){
        return (    
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7"click={this.addDigit}/>
                <Button label="8"click={this.addDigit}/>
                <Button label="9"click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}