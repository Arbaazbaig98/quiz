import Card from "./Card";
import InterviewI from "../Api/InterviewI"
const Mock=()=>{
    return(
        <>
        <div className=" marg">
            <h1 className="center">Mock Tests</h1>
            {InterviewI.map((self)=>{
                return(
            <Card
                key={self.id}
                btn={self.Mock}
                text={self.text1}
                course={self.course}
                btnn="Take Test"
            />
                )
            })}
        </div>
        </>
    )
}

export default Mock;