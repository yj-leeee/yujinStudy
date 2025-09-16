import './Summary.scss';

export default function Summary(props) {
  return (
    <div id="summary">
      <h1 style={{alignSelf:"flex-start" , marginLeft: "30px"}}>Summary</h1>

      <div className="summary-list">
        {props.data?.map((item, index) => (
          <div
            className="summary-card"
            key={index}
            style={{ backgroundColor: item.background }}
          >
            <p style={{ color: item.color }}>
              <img src={item.icon} alt="icon" />
              <span>{item.category}</span>
            </p>
            <p>
              <span style={{ color: 'black' }}>
                {item.score}
                <span style={{ color: 'hsl(241, 100%, 89%)' }}> / 100</span>
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* 마지막 Continue 버튼 */}
      <div className='summary-card' id="summary-continue">Continue</div>
    </div>
  );
}
