// src/hooks/useStarRating.js (수정된 파일)
import React from 'react';
// ❌ starIcon 직접 import 제거 ❌
// import starIcon from '../asset/image.png'; 

// 별 이미지를 렌더링하는 사용자 훅
// ⭐️ starIcon 경로를 인수로 받습니다.
const useStarRating = (starIcon, count = 5) => { 
    // 5개의 별 이미지를 반복하여 렌더링
    const stars = Array(count).fill(0).map((_, i) => (
        <img 
            key={i} 
            // ⭐️ 인수로 받은 starIcon을 src에 사용
            src={starIcon} 
            alt="Star Icon" 
            className="star-icon-img" 
        />
    ));
    
    // 렌더링할 별 아이콘들의 배열을 반환
    return stars;
};

export default useStarRating;