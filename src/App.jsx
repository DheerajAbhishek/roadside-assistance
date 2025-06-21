import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './assets/components/Home';
import About from './assets/components/About';
import Service from './assets/components/Service';
import Feedback from './assets/components/FeedBack'; // if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
