import { useContext } from 'react'
import {CountersContext} from '../../contexts/counterContext';

const BoutonGood = () => {
    const {increaseGood} = useContext(CountersContext);   
    return (
        <button onClick={increaseGood}>Good</button>
    );
};

export default BoutonGood;