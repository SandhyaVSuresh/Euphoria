import Home from './components/Home';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Home />
      <Routes>
        <Route path='/' component={<Home />} />
      </Routes>
    </Routers>
  );
}

export default App;
