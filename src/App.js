import './css/main.css';
import Navbar from './header/Navbar';
import Jumbotron from './jumbotron/Jumbotron';
import About from './showcase/About';
import Backed from './showcase/Backed';
import Showcase from './showcase/Showcase';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Showcase />
      <Backed />
      <About />
    </div>
  );
}

export default App;
