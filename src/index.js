import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function component
const HeadingComponent = () => {
  return <h1>Namaste World</h1>
}

class HeadingComponentUsingClass extends React.Component {
  // constructor(){

  // }
  render() {
    return <h1>Namaste World form class Component</h1>
  }
}

const CurrentTime = () => {
  return (
    <p> {+new Date()} </p>
  )
}

setInterval(() => root.render(
  <React.StrictMode>
    <HeadingComponent />
    <HeadingComponentUsingClass />
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

