import { useState } from 'react';
import axios from 'axios';
import './catFacts.css'

function CatFacts() {
    const [catFact, setCatFact] = useState("");

    const getNewFact = () => {
        axios.get('https://catfact.ninja/fact').then((res) => {
            // console.log("response", res.data);
            setCatFact(res.data.fact);
        })
    }

    return (
        <div className="cat-facts">
            <h2> Cat Facts </h2>
            <button onClick={() => getNewFact()}> Get New Cat Fact</button>
            <br/>
            <p> {catFact} </p>

        </div>
    );
}

export default CatFacts;