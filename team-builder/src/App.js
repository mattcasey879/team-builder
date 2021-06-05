
import './App.css';
import { useState } from 'react';
import Form from './Form'
import Card from './Card'


const initialFormValues = {
  username: '',
  email: '',
  role: '',
}
const arrOfFriends = [
]
function App() {
const [friends, setFriends] = useState(arrOfFriends);

const [formValues, setFormValues] = useState(initialFormValues)

const changeHandler = (inputName, inputValue) => {

  setFormValues({...formValues, [inputName]: inputValue})
}

const submitHandler = (event) => {
  const newFriend = formValues;
  const updatedFriends = arrOfFriends.concat(...friends, newFriend);
  setFriends(updatedFriends);

  setFormValues(initialFormValues);
}

  return (
    <div className="App">
      <Form
      values={formValues}
      change={changeHandler}
      submit={submitHandler}
      />
      <Card key={formValues.username} 
      friends={friends}
      />

    </div>
  );
}

export default App;
