import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
const App = () => {
  let name = 'phong';
  let obj = { name: 'Phong', Age: '21' };
  let link = 'https://www.facebook.com/profile.php?id=100004722139213';
  const handleClick = (event) => {
    alert('hehe');
    alert(event);
  }
  return (
    <div className="App">
      <Nav></Nav>
      {console.log('check obj: ', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world from {typeof (name)} {obj.name}</h1>
        <p style={{ color: 'red' }}>{JSON.stringify(obj)}</p>
        <a href={link} target="_blank"> Visit Facebook</a>
        <button onClick={(event) => handleClick(event)}>Click me</button>
      </header>

    </div>
  );
}


export default App;
