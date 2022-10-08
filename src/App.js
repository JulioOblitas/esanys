/*import './App.css';*/


import  {BrowserRouter as  Router,  Route, Routes  } from "react-router-dom";
import NavBar from './components/NavBar'


/*import Footer from './components/Footer'*/
/*import Footer2 from './components/Footer2'*/
import Home from './components/Home'

function App() {
  
  return (
   <>
        
      <Router>                        
          <NavBar/>   
          
          <Routes>
              <Route  path="/home" element={<Home />} />  
          </Routes>
    
      </Router>
    
  </>
  );
}

export default App;
