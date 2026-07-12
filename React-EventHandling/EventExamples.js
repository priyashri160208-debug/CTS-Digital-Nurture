import React, { useState } from "react";

function EventExamples() {

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSubmit = () => {
    const euro = amount / 90;
    setResult(euro.toFixed(2));
  };

  return (
    <div>

      <h2>Counter</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <h3>Count : {count}</h3>

      <button
        onClick={() => {
          sayHello();
          sayWelcome("Welcome");
        }}
      >
        Say Welcome
      </button>

      <hr />

      <h2>Currency Convertor!!!</h2>

      <label>Amount</label>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Convert
      </button>

      <h3>{result} Euro</h3>

    </div>
  );
}

export default EventExamples;
