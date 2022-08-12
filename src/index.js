import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import FormComponent from './Form';
import HeadingComponent from './HeadingComponent';
import HeadingComponentUsingClass from './HeadingComponentUsingClass';
import './index.css';
import List from "./List"

const root = ReactDOM.createRoot(document.getElementById('root'));

const CurrentTime = () => {
  return (
    <p>
      {" "}
      {new Date().toLocaleString()}
      {/* <HeadingComponentUsingClass title="passed from current time" /> */}
      {" "}
    </p>
  )
}

root.render(
  <React.StrictMode>

    <FormComponent />
    <HeadingComponent title="Namaste from Heading Component Title" number="10" />
    {/* <HeadingComponentUsingClass /> */}
    <CurrentTime />
    <div className='mainfile-container'>
      <Counter />
      <List />
    </div>

  </React.StrictMode>
);

// setInterval(() => root.render(
//   <React.StrictMode>
//     <HeadingComponent title="Namaste from Heading Component Title" number="10" />
//     {/* <HeadingComponentUsingClass /> */}
//     <CurrentTime />
//   </React.StrictMode>
// ), 1000)