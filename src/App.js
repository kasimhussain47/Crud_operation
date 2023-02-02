import './App.css';
import Home from './Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Emply from './Emply';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Emply/>} />
        <Route path='/Edit' element={<Edit/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
