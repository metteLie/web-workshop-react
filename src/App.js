import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Intro from './Intro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lecture from './Lecture';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/Lecture" element={<Lecture />} />
          </Routes>
        </div>   
      </div>
    </Router>
  );
}

export default App;
