import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/todocontainer"
import { useLocation } from "react-router-dom"

import { Container } from "postcss";


function Landingpage()

{
    const data = useLocation()

  return(
    
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name = {data.state.user}></Header>
        <div className="flex justify-center gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai "}></Card>
        <Card bgcolor={"#FD6663"} title={"December"} subtitle={"06:30:00"}></Card>
        <Card bgcolor={"#FCA201"} title={"Build using"} subtitle={"React "}></Card>

        </div>
       <TodoContainer></TodoContainer>
      </div>
      
    </div>
    
  );
  
}

export default Landingpage