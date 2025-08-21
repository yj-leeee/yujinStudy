// src/components/UserQuote.jsx
import React from "react";

export default function UserQuote({ mbti, children }) {
    const desc =
    mbti === "INFP"
        ? "이 사람은 감성적인 타입입니다."
        : mbti === "ENTJ"
        ? "이 사람은 전략적인 리더입니다."
        : "이 사람은 개성이 강한 타입입니다.";

    return (
        <div>
            <p>설명 : {desc}</p>
            <blockquote style={{ margin: "8px 0", paddingLeft: 12, borderLeft: "4px solid #ddd" }}>
            {children}
        </blockquote>
    </div>
    );
}
