import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56;
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button>
            <p>Count: {count}</p>
            <p>Count: {count * 2}</p>
            <h4>My Number : {number}</h4>
        </div>
    );
};

export default Home;