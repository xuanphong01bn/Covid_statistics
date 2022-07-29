import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'phong';
  let obj = { name: 'Phong', Age: '21' };
  let link = 'https://www.facebook.com/profile.php?id=100004722139213';
  return (
    <div className="App">
      {console.log('check obj: ', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world from {typeof (name)} {obj.name}</h1>
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target="_blank"> Visit my facebook</a>
      </header>

    </div>
  );
}

export default App;
