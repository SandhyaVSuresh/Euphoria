import Home from './components/Home';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage"

function App() {
  return (
    <Routers>
      {/* <Home /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Routers>
  );
}

export default App;
