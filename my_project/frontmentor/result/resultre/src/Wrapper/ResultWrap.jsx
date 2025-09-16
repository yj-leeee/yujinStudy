import { useSelector } from "react-redux"
import Result from "../Component/Result"

export default function ResultWrap(){
    const score = useSelector((state) => state.data);
    console.log("score from store:", score); // 여기!
    const avg =
    score && score.length > 0
        ? Math.round(score.reduce((acc, cur) => acc + cur.score, 0) / score.length)
        : 0;
    return <Result avg={avg}></Result>
}