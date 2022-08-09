import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function component
const HeadingComponent = (props) => {
  return <h1>{props.title} {props.number}</h1>
}

//class component
class HeadingComponentUsingClass extends React.Component {
  // constructor(){

  // }

  //render is must inside class component
  render() {
    return <h1>Namaste class -- {this.props.title}</h1>
  }
}

const CurrentTime = () => {
  return (
    <p>
      {" "}
      {new Date().toLocaleTimeString()} --
      <HeadingComponentUsingClass title = "passed from current time" />
      {" "}
    </p>
  )
}

setInterval(() => root.render(
  <React.StrictMode>
    <HeadingComponent title="Namaste from Component" number="10" />
    {/* <HeadingComponentUsingClass /> */}
    <CurrentTime />
  </React.StrictMode>
), 1000)

// root.render(
//   <React.StrictMode>
//     <HeadingComponent />
//     <HeadingComponentUsingClass />
//     <CurrentTime/>
//   </React.StrictMode>
// );

