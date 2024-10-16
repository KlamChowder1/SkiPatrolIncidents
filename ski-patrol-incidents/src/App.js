import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddIncidentForm from './components/AddIncidentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddIncidentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
