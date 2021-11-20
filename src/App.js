import logo from './logo.svg';
import './App.css';
import server from './server';
import Seats from './components/Seats';
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">

      <Seats/>

      <Checkout/>
     
    </div>
  );
}

export default App;
