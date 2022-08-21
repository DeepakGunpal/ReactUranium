import React from 'react';
import Convert from '../convertText/ConvertText';
import Counter from '../counter/Counter';
import FormComponent from '../Form';
import HeadingComponent from '../HeadingComponent';
import HeadingComponentUsingClass from '../HeadingComponentUsingClass';
import ListComponent from '../List';

import './homePage.css';

function HomePage() {

    const CurrentTime = () => {
        return (
            <p>
                {" "}
                {new Date().toLocaleString()}
                <HeadingComponentUsingClass title="passed from current time" />
                {" "}
            </p>
        )
    }

    return (
        <div>
            <h1> Home Page </h1>
            <div>
                <a href="/payment"> Go to Payment Page</a>
            </div>
            <div>
                <a href="/product"> Go to product Page</a>
            </div>
            <div>
                <a href="/catfact"> Go to cat facts Page</a>
            </div>
            <div>
                <a href="/crypto"> Go to Crypto Page</a>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <Convert />
                <FormComponent />
                <HeadingComponent title="Namaste from Heading Component Title" number="10" />
                <HeadingComponentUsingClass />
                <CurrentTime />
                <div className='mainfile-container'>
                    <Counter />
                    <ListComponent />
                </div>
            </div>
        </div>
    );
}

export default HomePage;