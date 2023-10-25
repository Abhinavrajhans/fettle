
import {  Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from "../src/components/Homepage";
import AboutPage from "../src/components/AboutPage";
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App" >
      <div>
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<HomePage/>}
          />
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
