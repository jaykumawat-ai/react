import './App.css';
import Usercard from './components/userCard';
import goldburg from './assets/goldburg.webp'
import roman from './assets/roman.jpeg';
import randy from './assets/randy.jpg';
import brock from './assets/brock.jpg';

function App() {
  return (
    <div className="container">
      <Usercard name="roman" info="The dog" imagePath={roman} />
      <Usercard name="brock" info="Badass man" imagePath={brock} />
      <Usercard name="randy" info="Viper" imagePath={randy} />
      <Usercard name="goldburg" info="The OG" imagePath={goldburg} />
    </div>
  );
}

export default App;
