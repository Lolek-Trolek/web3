import { useState } from 'react'
import Numbers from 'components/Numbers/numbers'
import Filter from 'components/Filter/PhoneFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1,
      name: 'Arto Hellas', 
      phone : '+32 488 78 96 54'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br/>
          phone number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debugName: {newName}</div>
      <div>debugPhone: {newPhone}</div>
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App