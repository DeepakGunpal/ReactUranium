import React from 'react';

// let a = 2;

//class component
class HeadingComponentUsingClass extends React.Component {

    constructor() {
        super()
        console.log('Namaster from constructor');
        // this.updateVariableValue();
        this.state = {
            a: 2
        };
    }

    componentDidMount() {
        console.log('Namaste from didMount')
        this.updateVariableValue();
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateVariableValue() {
        console.log('updating')
        setTimeout(() => {
            // console.log('value -', this.state.a)
            // a += 1;
            this.setState({
                a: this.state.a + 1
            }, () => console.log('value updated'))
        }, 5000)
    }

    /*
    constructor => didMount (where we can make changes  ) => if changes then => unmount first
    then, again => didMount => didUpdate => change updated =>
     */

    //render is must inside class component
    render() {
        return <div>
            <h1>class -- {this.props.title}</h1>
            <br /> {" "}
            <p>Value - {this.state.a}</p>
        </div>
    }
}

export default HeadingComponentUsingClass;