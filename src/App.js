import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {Route,Routes} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { PrivateRoutes } from './components/PrivateRoutes';
import { Dashboard } from './components/Dashboard';
import { Edit } from './components/Edit';
// import 'react-chartjs-2/dist/react-chartjs-2.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
