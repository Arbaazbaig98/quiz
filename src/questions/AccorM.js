import HtmlQ from "./HtmlQ";
import HtmlA from "../Api/HtmlA";
const AccorM=()=>{
    return(
        <>
        <div className="container marg ">
        <h1>HTML & CSS Questions and Answers</h1><br/>
             {HtmlA.map((self)=>{
            return( 
            <HtmlQ key={self.id} {...self} />                          
            )
        })}
        </div>
        </>
    )
}

export default AccorM;