import Login from './Login';
import List from './List';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    //creating routes
    <Routes>    
      <Route path="/" element={<List />} />
      <Route path="/list" element={<List />} />
      {/* still not implemented */}
      <Route path="/login" element={<Login />} />
      
    </Routes>
    
     
  );
}

export default App;
