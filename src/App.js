import './css/main.css';
import Navbar from './header/Navbar';
import Jumbotron from './jumbotron/Jumbotron';
import Showcase from './showcase/Showcase';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Showcase />
    </div>
  );
}

export default App;
