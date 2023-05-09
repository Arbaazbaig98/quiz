import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Interview from './components/Interview';
import AccorM from './questions/AccorM';
import CssQ from './questions/CssQ'
import Footer from './components/Footer';
import Mock from './components/Mock';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
    <Router>
      <Navbar/>
      
      <Routes> 
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/Mock" element={<Mock/>} />
      <Route exact path="/Interview" element={<Interview/>} />
      <Route exact path="/Html" element={<AccorM/>} />
      <Route exact path="/Js" element={<CssQ/>} />
      </Routes>
      {/* <AccorM/> */}
      <Footer/>
      
    </Router>
    </div>
  );
}

export default App;
