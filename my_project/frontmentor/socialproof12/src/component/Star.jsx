// src/component/Star.jsx
import './Star.css';
import starIcon from '../asset/image.png';
import useStarRating from '../hooks/useStarRating'; // Custom Hook import

// 1. 개별 별점 카드를 위한 서브 컴포넌트 (Star 컴포넌트 외부에 위치)
const StarRatingItem = ({ text, starIcon, count }) => {
    // 훅을 호출하여 별 5개 JSX를 받아옵니다.
    const stars = useStarRating(starIcon, count); 
    
    return (
        <div className='starcard'>
            <div className="stars">
                {stars} {/* 훅이 반환한 별 5개 이미지가 여기에 렌더링됩니다. */}
            </div>
            <span className="rating-text">{text}</span>
        </div>
    );
};

// 2. ⭐️ Star 컴포넌트 (데이터 배열 없이 직접 3개의 카드를 명시)
export default function Star(){
    // 별점 개수는 모두 5로 고정합니다.
    const STAR_COUNT = 5; 

    return(
        <div className="starcard-container"> {/* 전체 래퍼 */}
            
            {/* ⭐️ 첫 번째 별점 카드 */}
            <StarRatingItem
                text="Rated 5 Stars in Reviews"
                starIcon={starIcon}
                count={STAR_COUNT}
                className="starcard"
            />

            {/* ⭐️ 두 번째 별점 카드 */}
            <StarRatingItem
                text="Rated 5 Stars in Report Guru"
                starIcon={starIcon}
                count={STAR_COUNT}
                className="starcard"
            />
            
            {/* ⭐️ 세 번째 별점 카드 */}
            <StarRatingItem
                text="Rated 5 Stars in BestTech"
                starIcon={starIcon}
                count={STAR_COUNT}
                className="starcard"
            />
            
        </div>
    );
}