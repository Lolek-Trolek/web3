import { useContext }from 'react'
import { CountersContext } from '../../contexts/counterContext'
import BoutonGood from '../Bouton/boutonGood'
import BoutonOk from '../Bouton/boutonOk'
import BoutonBad from '../Bouton/boutonBad'
import BoutonReset from '../Bouton/BoutonReset'
import './App.css'

function App() {
  const { counterGood,counterOk,counterBad } = useContext(CountersContext);

  console.log('counterGood', counterGood);
  console.log('counterOk', counterOk);
  console.log('counterBad', counterBad);
  return (
    <div>
      <div>
      <p>Good : {counterGood}</p> <BoutonGood/>
      </div>
      <div>
      <p>Ok : {counterOk}</p> <BoutonOk/>
      </div>
      <div>
      <p>Bad : {counterBad}</p> <BoutonBad/>
      </div>
      <br />
      <BoutonReset/>
    </div>
  );

};

export default App
