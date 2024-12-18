const Numbers = ({ persons }) => {
    return (
        <div>
        <h2>Numbers</h2>
        {persons.map(person => 
            <div key={person.id}>
                <p>{person.name}</p>
                <p>{person.phone}</p>
            </div>
        )}
        </div>
    );
};

export default Numbers;
