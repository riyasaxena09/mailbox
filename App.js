import Welcome from './components/Welcome';
import './App.css';
import SignUp from './components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
     <BrowserRouter>
<Routes>
  
  <Route path='/' element={<SignUp></SignUp>}></Route>
  <Route path='/wel' element={<Welcome></Welcome>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
