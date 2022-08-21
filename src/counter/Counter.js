import React from "react";
import "./Counter.css";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    increaseCounter() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decreaseCounter() {
        this.setState({
            count: this.state.count - 1,
        });
    }

    changeInputValue(value) {
        this.setState({
            count: parseInt(value)
        });
    }

    showOddEven() {
        return (this.state.count % 2 === 0) ? <span>Even</span> : <span>Odd</span>
    }

    render() {
        return <div className="count-component">
            <p>Count - {this.state.count}</p>
            <input type="number" value={this.state.count} onChange={event => this.changeInputValue(event.target.value)} />
            <button id="increase" onClick={_ => this.increaseCounter()}> + Increase </button>
            <button id="decrease" onClick={_ => this.decreaseCounter()}> - Decrease </button>
         
            <div className="count-type">
                {/* 1st approach */}
                {/* {(this.state.count % 2 !== 0) && <span>Odd</span>}
                {(this.state.count % 2 === 0) && <span>Even</span>} */}

                {/* 2nd approach */}
                {/* {(this.state.count % 2 === 0) ? <span>Even</span> : <span>Odd</span>} */}

                {/* 3rd approach */}
                {/* {this.showOddEven()} */}

                {/* 4th approach */}
                <span style={{
                    display: this.state.count % 2 === 0 ? 'inline' : 'none'
                }}>Even</span>

                <span style={{
                    display: this.state.count % 2 !== 0 ? 'inline' : 'none'
                }}>Odd</span>
            </div>
        </div>
    }
}

export default Counter;