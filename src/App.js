import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home/Home';
import Country from './pages/Country/Country';

function App() {
  const { id } = useParams();
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries/:id' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
