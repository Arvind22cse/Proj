import Calender from "./Calender";
import Car from "./Car";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from "./Card";
import Events from "./Events";
function App(){


return(
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Car/>} />
  <Route path="/calender" element={<Calender/>} />
  <Route path="/card" element={<Card/>} />
  <Route path="/events" element={<Events/>} />
  </Routes>
  </BrowserRouter>
  
);

};
export default App;