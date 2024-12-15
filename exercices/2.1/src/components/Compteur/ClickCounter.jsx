import { useState, useEffect } from "react";

const Counter = ({ title, message, message2 }) => {
  // Lire la valeur initiale depuis le localStorage (ou mettre 0 par défaut si elle est vide)
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [isHovered, setIsHovered] = useState(false);

  // Utiliser useEffect pour synchroniser le localStorage à chaque changement de `count`
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]); // Cette fonction s'exécute chaque fois que `count` change

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Utilisez une fonction callback pour garantir la mise à jour
  };

  const handleMouse = (hovering) => {
    setIsHovered(hovering);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{isHovered && message2}</p>
      <button
        onClick={handleClick}
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      >
        {count}
      </button>
      <p>{count >= 10 && message}</p>
    </>
  );
};

export default Counter;
