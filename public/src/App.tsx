import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Login from './features/login/login';

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
