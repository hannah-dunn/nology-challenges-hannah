import React, { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
    if()

  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h2>
        Count <span title="count">{count}</span>
      </h2>
      <button data-testid='decreaseButton' onClick={() => setCount(count - 1)}>-</button>
      <button data-testid='increaseButton' onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
