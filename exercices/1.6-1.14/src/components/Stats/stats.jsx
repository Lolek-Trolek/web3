import StatsLine from "./StatsLine";

const Stats = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
        <div>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </div>
        )
    }
    return (
        <div>
        <h1>statistics</h1>
        <StatsLine text={"good"} value={good}/>
        <StatsLine text={"neutral"} value={neutral}/>
        <StatsLine text={"bad"} value={bad}/>
        <StatsLine text={"all"} value={good+bad+neutral}/>
        <StatsLine text={"average"} value={(good - bad) / (good + neutral + bad)}/>
        <StatsLine text={"Positive in %"} value={good / (good + neutral + bad) * 100}/>
        </div>
    )
};

export default Stats;