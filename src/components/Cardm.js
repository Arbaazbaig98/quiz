import Pasing from "./Pasing"
import React from "react"
import Card from "./Card"
const Cardm=()=>{

  return(
    <>
    {Pasing.map((self)=>{
      return(
        <Card key={self.id} 
        btn ={self.click}
        btnn="Learn Here"
        {...self} />
      )
    })}
      
    </>
  )
}

export default Cardm;