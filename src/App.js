import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Rout from './rout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </div>
  );
}

export default App;
