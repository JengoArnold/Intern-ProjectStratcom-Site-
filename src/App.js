
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Services from './Services';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
 <div className="App">
            <Router> 
                <Routes>
                   <Route path="/*" element={
                    <>
                      <Header/> 
                      <Routes>
                           <Route path='/' element={<Home/>}/>
                           <Route path='/about' element={<AboutUs/>}/>
                           <Route path='/services' element={<Services/>}/>
                           <Route path='/about' element={<AboutUs/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/signup' element={<Signup/>}/>
                      </Routes>
                    </>
                   } />  
                </Routes>
            </Router>
                    
              {/* <Login/>
              <Signup/> */}
             <Footer/> 
    </div>










    </div>
  );
}

export default App;
