
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Edit from './Students/Edit';
import View from './Students/View';

function App() {
  return (
    <>
    <BrowserRouter>

     <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path="/edit/:id" element={<Edit/>}/>
       <Route path="view/:id" element={<View/>}/>
    
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
