import "./App.css"
import  Layout  from "./Navbar/Layout";
import  Home  from "./Navbar/Home";
import  Contact  from "./Navbar/Contact";
import  Blogs  from "./Navbar/Blogs";
import  Error  from "./Navbar/Errror";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path="contact" element = {<Contact/>}/>
            <Route path="blogs" element = {<Blogs/>}/>
            <Route path="*" element = {<Error/>}/>
          </Route>
      </Routes> 
  </BrowserRouter>
  
)
}

export default App;
