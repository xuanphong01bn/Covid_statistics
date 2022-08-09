import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import Covid from './views/Covid';
const App = () => {
  let [name, setName] = useState('Phonghihi')
  // name la bien, setName la ham khi name thay doi
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching video games" },
    { id: "todo2", title: "Sleep" }

  ]);
  useEffect(() => {
    console.log('run use effect')
  }, [address]) //= component did mout
  const handleClick = (event) => {
    // setName('Hoi dan it'); // setname là bất đồng bộ
    // console.log(">>> clicl me", name)
    // hook not merge state
    if (!address) {
      alert('empty input')
      return;
    }
    let newTodo = { id: Math.floor((Math.random() * 1000) + 1), title: address }
    setTodos([...todos, newTodo])
    setAddress('')

  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    setAddress(event.target.value)
  }
  const handleDeletehihi = (id) => {
    let a = todos.filter(item => item.id !== id);
    setTodos(a);
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Todo
          todos={todos}
          title='Hello props'
          handleDelete={handleDeletehihi}
        />
        <input type="text" placeholder='Nhap ten vao day'
          value={address}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={(event) => handleClick(event)}>Click me</button> */}
        <Covid />

      </header>

    </div>
  );
}


export default App;
