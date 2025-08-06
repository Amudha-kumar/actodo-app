import Header from "./components/header";
import Card from "./components/card";
import TodoContainer from "./components/todocontainer"
import { Container } from "postcss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Landingpage from "./pages/landing";
import { useState } from "react";



function App()
{
  const [users,setusers]=useState([

        {
        username:"Amudha",
        password :"1234"


        }

    ])
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn users={users} setusers={setusers}/>} ></Route>
      <Route path='/signup'element={<SignUp users={users} setusers={setusers}/>}></Route>
      <Route path='/landingpage'element={<Landingpage/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App

