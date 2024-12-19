import { useState,useEffect } from 'react'
import Numbers from 'components/Numbers/numbers'
import Filter from 'components/Filter/PhoneFilter'
import PersonsForm from 'components/PersonForm/personForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })  
  },[]);

  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonsForm newPhone={newPhone} newName={newName} addPerson={addPerson}  handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <div>debugName: {newName}</div>
      <div>debugPhone: {newPhone}</div>
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App