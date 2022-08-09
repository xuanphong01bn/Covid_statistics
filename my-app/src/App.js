import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
const App = () => {
  let [name, setName] = useState('Phonghihi')
  // name la bien, setName la ham khi name thay doi
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching video games" },
    { id: "todo2", title: "Sleep" }

  ]);

  const handleClick = (event) => {
    // setName('Hoi dan it'); // setname là bất đồng bộ
    // console.log(">>> clicl me", name)
    // hook not merge state
    if (!address) {
      alert('empty input')
      return;
    }
    let newTodo = { id: ' ', title: address }
    setTodos([...todos, newTodo])
    setAddress('')

  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world from {name}</h1>
        <Todo
          todos={todos}
          title='Hello props'
        />
        <input type="text" placeholder='Nhap ten vao day'
          value={address}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={(event) => handleClick(event)}>Click me</button>
      </header>

    </div>
  );
}


export default App;
