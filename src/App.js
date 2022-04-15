import Header from './components/Header/Header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home.js';
import Works from './views/Works/Works.js';
import Footer from './components/Footer/Footer.js';



function App() {
  

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
