import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import EventSekolah from './EventSekolah';
import Sekbid from '../Sekbid';
import DetailedSekbid from './DetailSekbid';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-sekolah" element={<EventSekolah />} />
      <Route path="/sekbid" element={<Sekbid />} />
      <Route path="/sekbid/:id" element={<DetailedSekbid />}  />
    </Routes>
    </BrowserRouter>
  )
}