import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TravelGuide from "./components/TravelGuide";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/travel-guide" element={<TravelGuide/>} />
        </Routes>
      </Router>
  );
}

export default App;
