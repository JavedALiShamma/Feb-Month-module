import { BrowserRouter, Routes,Route } from "react-router";
import Home from "./home";
import Iteam from "./iteam";
import { Provider } from 'react-redux';
import store from "./Redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
      <>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/iteam/:id" element={<Iteam/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
      </>
  )
}

export default App
