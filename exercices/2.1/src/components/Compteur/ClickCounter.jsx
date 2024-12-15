import { useState } from 'react'

const Counter = ({title, message}) => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <>
    <h1>{title}</h1>
    <button onClick={handleClick}>
      {count}
    </button>
    <p>{count >= 10 && message}</p>
    </>
  );
};

export default Counter;