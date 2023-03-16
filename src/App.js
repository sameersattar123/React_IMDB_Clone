import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './Components/common/Header';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { routePath } from './Constants/route';
import CategoriesMovies from './pages/CategoriesMovies';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path={routePath.home} element={<Home/>}/>
      <Route path={routePath.categories} element={<CategoriesMovies/>}/>
      <Route path={routePath.invalid} element={<Home/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
