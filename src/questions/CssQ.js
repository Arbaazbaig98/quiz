import HtmlQ from "./HtmlQ";
import JsI from "../Api/JsI";
const AccorM=()=>{
    return(
        <>
        <div className="container marg ">
        <h1>JavaScript Questions and Answers</h1><br/>
             {JsI.map((self)=>{
            return( 
            <HtmlQ key={self.id} {...self} />                          
            )
        })}
        </div>
        </>
    )
}

export default AccorM;