import './App.css'
import './Views/Home'
import './Components/Header'
import { BrowserRouter, Route, Routes } from 'react - router - dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}