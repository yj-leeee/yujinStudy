import './Order.css';

export default function Order(){
    return(
        <div id='container2'>
            <h2>Order Summary</h2>
            <p className='p_color' id='p1'>
                <span id='pc'>You can now listen to millions of songs,<br/>audiobooks, and podcasts on any device<br/> anywhere you like!</span>
                <span id='mobile'>You can now listen to millions of<br/> songs, audiobooks, and podcasts on<br/> any device anywhere you like!</span>
            <div id='con_plan'>
                <img src='/icon-music.svg'></img>
                <div id='plan_text'>
                        <div id='plan_top'>
                            <p id='p2' className='p_border'>Annual Plan</p>
                            <p className='p_color'>$59.99/year</p>
                        </div>
                    <a href='#'>Change</a>
                </div>
            </div>
            <div id='btn' className='p_border'>Proceed to Payment</div>
            <p className='p_color p_border' id='p3'>Cancel Order</p>
            </p>
        </div>
    )
}