import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import Trial from "./pages/trial"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path="/free-trial" element={<Trial/>}/>
      </Routes>
    </div>
  );
};

export default App;

