import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import Layout from './features/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
