import React from 'react';
import './ConvertText.css'

class Convert extends React.Component {

    constructor() {
        super();
        this.state = {
            text: ""
        };
    }

    uppercase = () => {
        this.setState({
            text: this.state.text.toUpperCase()
        });
    }

    lowercase = () => {
        this.setState({
            text: this.state.text.toLowerCase()
        });
    }

    clear = () => {
        this.setState({
            text: ""
        })
    }

    handleChange = (value) => {
        this.setState({
            text: value
        });
    }

    render() {
        return <div className='convert-component'><b style={{ padding: '15px', fontSize: '25px' }}>Convert text</b><div className='convert'>
            <input type="text" onChange={(e) => this.handleChange(e.target.value)} value={this.state.text} />
            <div className='click'>
                <button id="uppercase" onClick={_ => this.uppercase()}>  Uppercase </button>
                <button id="lowercase" onClick={_ => this.lowercase()}>  Lowercase </button>
                <button id="clear" onClick={_ => this.clear()}>  Clear </button>
            </div>
        </div></div>
    };
}

export default Convert;