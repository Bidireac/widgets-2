import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Accordion from './pages/Accordion';
import LoremIpsum from './pages/LoremIpsum';
import Tour from './pages/Tours';
import Slider from './pages/Slider';
import ColorGenerator from './pages/ColorGenerator';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tour />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/lorem-ipsum" element={<LoremIpsum />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/colorGenerator" element={<ColorGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
