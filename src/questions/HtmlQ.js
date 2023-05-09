import { useState } from "react";
const HtmlQ=(props)=>{
    const [set,update]=useState(false);
    return(
        <>
           
            <div className="container">
            <div className="Accor">
                <div>
                    <h5>{props.Question}</h5>
                    {/* <h5><span cl1assName="btn" onClick={()=>update(!set)}>{set?"➖":"➕"} </span>{props.Question}</h5> */}
                </div>
                    {/* {set &&} */}
                    <p >{props.Answer}</p>
                </div>
            </div>
        </>
    )
}

export default HtmlQ;