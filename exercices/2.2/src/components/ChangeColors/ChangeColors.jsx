import { useState } from 'react';
const ChangeColors = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const listeColors = ['red', 'green', 'blue', 'yellow', 'purple'];
    
    const changeColor = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % listeColors.length);
    };
    
    return (
        <div style={{ backgroundColor: listeColors[colorIndex] }}>
        <button onClick={changeColor}>Change color</button>
        </div>
    );
};
    
export default ChangeColors;