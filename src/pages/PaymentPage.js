import React from 'react';
import { useParams } from 'react-router-dom';

function PaymentPage() {

    // const params = useParams();
    const { price, quantity } = useParams();
    // console.log("params ", params)

    return (
        <h1> Payment Page - Price : {price}, Quantity : {quantity}</h1>
    );
}

export default PaymentPage;