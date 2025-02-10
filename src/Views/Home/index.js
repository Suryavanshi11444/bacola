import './App.css';
import Home from './Pages/Home'
import Header  from './Components/Header';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
  import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" exact={true} element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;