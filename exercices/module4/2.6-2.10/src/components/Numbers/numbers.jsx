const Numbers = ({ persons,filter }) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    if (filter === '') {
        return (
            <div>
            <h2>Numbers</h2>
            {persons.map(person => 
                <div key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.number}</p>
                </div>
            )}
            </div>
        );
    } else {
        return (
            <div>
            <h2>Numbers</h2>
            {filteredPersons.map(person => 
                <div key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.number}</p>
                </div>
            )}
            </div>
        );
    }
};

export default Numbers;
