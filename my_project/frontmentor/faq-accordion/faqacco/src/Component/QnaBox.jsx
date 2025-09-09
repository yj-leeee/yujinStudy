import './QnaBox.css'
import iconStar from '../asset/icon-star.svg';
import Qna from './Qna';

export default function QnaBox(){
    const qna = [
    {id:1, question:"What is Frontend Mentor, and how will it help me?",
        answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {id:2, question:"Is Frontend Mentor free?",
        answer:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {id:3, question:"Can I use Frontend Mentor projects in my portfolio?",
        answer:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {id:4, question:"How can I get help if I'm stuck on a challenge?",
        answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
    ]
    return(
        <div id='div1'>
            <div id="title">
            <img src={iconStar}/>
            <h1> FAQs</h1>
            </div>
            <Qna qna={qna}></Qna>
        </div>
        
    )
}