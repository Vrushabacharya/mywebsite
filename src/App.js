
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './component/Skills';
import Projects from './component/Projects';

function App() {
  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element={ <Navbar />}/>
     <Route path="/about" element={ <About />}/>
     <Route path="/skills" element={ <Skills />}/>
     <Route path="/projects" element={ <Projects />}/>
        
      </Routes>
    </Router>
 






    </div>
  );
}

export default App;
