import Home from './components/Home';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage"
import Womens from './components/Womens';
import Mens from './components/Mens';

function App() {
  return (
    <Routers>
      {/* <Home /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        
        <Route exact path='/women' element={<Womens />} />
        <Route exact path='/men' element={<Mens />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Routers>
  );
}

export default App;
