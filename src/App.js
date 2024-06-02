import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './zoopages/Home';
import Animal from './zoopages/Animal';
import Contact from './zoopages/Contact';
import About from './zoopages/About';
import Bird from './zoopages/Bird';
import Rep from './zoopages/Rep';
import Ani from './zoopages/Ani';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/animals' element={<Animal/>}/>
        <Route path='/animals/birds' element={<Bird/>}/>
            <Route path='/animals/reptiles' element={<Rep/>}/>
            <Route path='/animals/animal' element={<Ani/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
