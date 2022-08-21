import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PaymentPage() {

    // const params = useParams();
    const { price, quantity } = useParams();
    // console.log("params ", params)

    const inputRef = React.createRef();
    const handleClick = () => {
        console.log("value --", inputRef.current.value);
    }

    //earlier - (controlled component)
    const [text, setText] = useState("");
    const handleChange = (text) => {
        setText(text);
    }

    return (
        <div>
            <h1> Payment Page - Price : {price}, Quantity : {quantity}</h1>
            <br />
            <div>
                {/* //* Uncontrolled component */}
                <input type="text" ref={inputRef} />
                <button onClick={() => handleClick()}>Button</button>
            </div>
            <div>
                {/* //* controlled component  */}
                <input type="text" value={text} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    );
}

export default PaymentPage;