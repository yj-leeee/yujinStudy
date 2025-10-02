import './Container.css';
import Mini from './Mini';

export default function Container(){
    return(
    <div id="container">
        <h1 className='pc p_white'>Get <span>insights</span> that help<br/>your business grow.</h1>
        <h1 className='mobile p_white'>Get <span>insights</span> that<br/>help your business<br/> grow.</h1>
        <p className='pc p_gray'>Discover the benefits of data analytics and make<br/> better decisions regarding revenue, customer <br/>experience, and overall efficiency.</p>
        <p className='mobile p_gray'>Discover the benefits of data <br/>analytics and make better decisions <br/>regarding revenue, customer <br/>experience, and overall efficiency.</p>
        <Mini/>
    </div>)
}