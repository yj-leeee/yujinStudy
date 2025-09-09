import iconplus from "../asset/icon-plus.svg"
import iconminus from "../asset/icon-minus.svg"
import { useState } from "react";

export default function Qna(props) {
    const qna = props.qna;
    const [Id,setId] = useState(null);

    function Chagne(id){
        setId(Id => (Id === id ? null : id));
    }

    const lists = [];
    for (let i = 0; i < qna.length; i++) {
    lists.push(
        <div>
        <div key={qna[i].id} id="box" onClick={()=>Chagne(qna[i].id)}>
        <p>{qna[i].question}</p>
        <img id="chg" src={Id === qna[i].id ? iconminus : iconplus}></img>
        </div>
        {Id === qna[i].id && (
            <p className="answer">{qna[i].answer}</p>
        )}
        </div>
    );
    }

    return <div>{lists}</div>;
}
