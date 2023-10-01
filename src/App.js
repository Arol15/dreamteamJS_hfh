import { BrowserRouter , Route, Router } from "react-router-dom"
import "./App.css";
import Admin from './pages/Admin'
import Navbar from "./pages/Navbar";
import DonatePage from './pages/DonatePage'
import "./style.css";

import Front from "./pages/Front";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
     <Route path='/' element={<Front />} />
     <Route path='/donate' element={<DonatePage />} /> 
     <Route path='/admin' element={<Admin />} />
     </BrowserRouter>
  );
}


export default App;
