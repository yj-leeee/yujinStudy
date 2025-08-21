// src/components/UserProfile.jsx
import React from "react";
import UserQuote from "./UserQuote";

export default function UserProfile({ users }) {
    const cards = [];
    for (let i = 0; i < users.length; i++) {
    const user = users[i];
    cards.push(
        <div key={user.name} style={{ border: "1px solid #eee", padding: 12, marginBottom: 12, borderRadius: 8 }}>
        <p>이름 : {user.name}</p>
        <p>나이 : {user.age}</p>
        <p>MBTI : {user.mbti}</p>
        {/* 좋아하는 말은 UserQuote의 children으로 전달 */}
        <UserQuote mbti={user.mbti}>{user.favoriteQuote}</UserQuote>
        </div>
    );
    }
        return <div>{cards}</div>;
}
