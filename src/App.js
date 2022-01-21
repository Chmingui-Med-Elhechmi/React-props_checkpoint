import './App.css';
import Profile from './profile/Profile';
import image from './profile/image.png';
function App() {
  const fullName="med chmingui";
  const bio="GOMYCODE";
  const profession="student"
  const info={ desc:"student"}
  const handleClick = e =>{
    e.preventDefault();
    alert(fullName);
  }
  return (
    <div className="App">
      <header className="App-header">
      <Profile info={info} fullName={fullName} bio={bio} profession={profession}>
        <img src={image} alt='img'/>
      </Profile>
      <a href="/" onClick={handleClick}>
        Click me
      </a>
      </header>
    </div>
  );
}

export default App;
