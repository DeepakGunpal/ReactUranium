import React, { useState } from 'react';


function ProductPage() {

    const [count, setCount] = useState(0);
    const [decreaseCount, setDecreaseCount] = useState(100);

    return (
        <div>
            <h1> Product Page </h1>
            <p onClick={() => setCount(count + 1)}> Increment count - {count}</p>
            <p onClick={() => setDecreaseCount(decreaseCount - 1)}> Decrease count - {decreaseCount}</p>
        </div>

    );
}

export default ProductPage;