import React, { useState } from "react";

const CountersContext = React.createContext(null);

const CountersProvider = ({ children }) => {
    const [counterGood, setCounterGood] = useState(0);
    const [counterOk, setCounterOk] = useState(0);
    const [counterBad, setCounterBad] = useState(0);

    const increaseGood = () => setCounterGood(counterGood + 1);
    const increaseOk = () => setCounterOk(counterOk + 1);
    const increaseBad = () => setCounterBad(counterBad + 1);
    const resetAll = () => {
        setCounterGood(0);
        setCounterOk(0);
        setCounterBad(0);
    };

    const value = {
        counterGood,
        counterOk,
        counterBad,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll,
    };

    return (
        <CountersContext.Provider value={value}>
            {children}
        </CountersContext.Provider>
    );
};

export { CountersContext, CountersProvider };
