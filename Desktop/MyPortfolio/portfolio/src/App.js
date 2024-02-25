

import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import  Project from './Component/Project';
import  Contact from './Component/Contact'
import Footer from './Component/Footer';
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
 
  
  return (

   <>
  
   <Router>
   <Navbar />
      <div className="h-screen bg-grey flex justify-end flex-col">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Project"
            element={<Project />}
          />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  
  
   </>
     
  );
}

export default App;
