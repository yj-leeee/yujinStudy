import './Result.scss';

export default function Result(props){
    return(
        <div id="result">
            <h1 className='color' style={{fontSize:'25px'}}>Your Result</h1>
            <div id='one'>
                <h1 id="avg">{props.avg}</h1>
                <p className='color' style={{marginTop:'-40px', marginBottom:'50px'}}>of 100</p>
            </div>
            <h1 style={{color:'white', marginBottom:'-10px'}} >Great</h1>
            <p className='color'>
                <span id="pc">You scored higher than 65% of<br/> the people who have taken <br/>these tests.</span>
                <span id="mobile">You scored higher than 65% of the <br/>people who have taken these tests.</span>
            </p>
        </div>
    )
}