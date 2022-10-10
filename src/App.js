// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/Not_Found/NotFound';
import './App.css';
import { AnimatePresence } from 'framer-motion';

class App extends Component {
  render() {
    return (
      <AnimatePresence>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path='/projects' element={< Projects />}></Route> */}
            <Route exact path="/about" element={<About />}></Route>
            {/* <Route exact path='/resume' element={< Resume />}></Route> */}

            {/* <Route exact path='/contact' element={< Contact />}></Route> */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          {/* <Footer/> */}
        </Router>
      </AnimatePresence>
    );
  }
}

export default App;
