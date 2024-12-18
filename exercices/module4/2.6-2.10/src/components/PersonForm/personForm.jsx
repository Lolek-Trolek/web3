const PersonsForm =({newPhone,newName,addPerson,handleNameChange,handlePhoneChange}) => {


    return(
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={handleNameChange} />
            <br/>
            phone number: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonsForm;
