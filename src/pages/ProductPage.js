import React, { useEffect, useState } from 'react';


function ProductPage() {

    //use state hook
    const [count, setCount] = useState(0);
    const [decreaseCount, setDecreaseCount] = useState(100);

    useEffect(() => {
        // console.log("update");
        document.title = `Incr - ${count} | decr - ${decreaseCount}`
    })

    return (
        <div>
            <h1> Product Page </h1>
            <p onClick={() => setCount(count + 1)}> Increment count - {count}</p>
            <p onClick={() => setDecreaseCount(decreaseCount - 1)}> Decrease count - {decreaseCount}</p>
        </div>

    );
}

export default ProductPage;