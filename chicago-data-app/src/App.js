import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessList from './Component/BusinessList';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import './styles.css';

const App = () => {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/businesses" element={<BusinessList />} />
      </Routes>
    </Router>
  );
};

export default App;
