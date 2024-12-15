import { useState } from 'react'

const Counter = ({title, message,message2}) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => setCount(count + 1);
  const handleMouse = (hovering) => {
    setIsHovered(hovering);
};
  return (
    <>
    <h1>{title}</h1>
    <p>{isHovered&&message2}</p>
    <button onClick={handleClick} 
            onMouseEnter={()=>handleMouse(true)}
            onMouseLeave={()=>handleMouse(false)}
    >
      {count}
    </button>
    <p>{count >= 10 && message}</p>
    </>
  );
};

export default Counter;