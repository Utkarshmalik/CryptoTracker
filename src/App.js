import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CoinPage from './Pages/CoinPage/CoinPage';

function App() {
  return (
    <div>

      <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/coins/:id" element={<CoinPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
