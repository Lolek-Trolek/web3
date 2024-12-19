import {CountersContext} from '../../contexts/counterContext';
import { useContext } from 'react';

const BoutonOk = () => {
    const {increaseOk} = useContext(CountersContext);

    return (
        <button onClick={increaseOk}>Ok</button>
    );
};

export default BoutonOk;