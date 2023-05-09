import InterviewI from "../Api/InterviewI"
import Card from "./Card"

const CardI=()=>{
  return(
    <>
    {InterviewI.map((self)=>{
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

export default CardI;