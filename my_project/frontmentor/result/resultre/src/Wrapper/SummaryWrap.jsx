import { useSelector } from "react-redux"
import Summary from "../Component/Summary"

export default function SummaryWrap(){
    const data = useSelector(state => state.data);
    return <Summary data={data}></Summary>
    
    }