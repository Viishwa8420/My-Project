import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import AddUser from "./Pages/Add";
import ViewUsers from "./Pages/View";
import Edituser from "./Pages/Edit"

function App() {


  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
        <Route path="/view" element={<ViewUsers/>}/>
     
  <Route path="/edit/:id" element={<Edituser />} />



      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
