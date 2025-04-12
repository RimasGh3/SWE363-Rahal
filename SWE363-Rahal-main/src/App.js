import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Community from './Community';
import BookRide from './BookRide';
import PostRide from './PostRide';
import History from './History';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/book-ride" element={<BookRide />} />
          <Route path="/post-ride" element={<PostRide />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
  );
}

export default App;
