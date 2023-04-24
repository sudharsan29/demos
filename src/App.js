import './App.css';
import Register from './Register';
import Login from './Login';
//import Header from './Header';
import Updateproduct from './Updateproduct';
import Addproduct from './Addproduct';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Protected from './Protected';
import Mainproduct from './Mainproduct';
function App() {
  return (
  <div className="App">
<BrowserRouter>
{/* <Header />   */}
<Routes>
<Route path="/"element={<Mainproduct />}/>
<Route path="/addproduct"element={<Protected cmp={Addproduct} />} />
<Route path="/update"element={<Protected cmp={Updateproduct}/>} />
<Route path="/login"element={<Login />} />
<Route path="/register"element={<Register/>} />

</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
