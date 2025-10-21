import './Card.css';
import colton from '../asset/image-colton.jpg';
import anne from '../asset/image-anne.jpg';
import irene from '../asset/image-irene.jpg';

export default function Card(){
    return(
        <div id='cardCon'>
            <div className='p_card'>
                <div className='profile'>
                    <img className="p_img" src={colton} />
                    <p className='p_text'>Colton Smith<br/>
                    <span className='p_name'>Verified Buyer</span></p>
                </div>
                <span className='p_text'>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</span>
                </div>

                <div className='p_card'>
                <div className='profile'>
                    <img className="p_img" src={irene} />
                    <p className='p_text'>Irene Roberts<br/>
                    <span className='p_name'>Verified Buyer</span></p>
                </div>
                <span className='p_text'>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</span>
                </div>

                <div className='p_card'>
                <div className='profile'>
                    <img className="p_img" src={anne} />
                    <p className='p_text'>Anne Wallace<br/>
                    <span className='p_name'>Verified Buyer</span></p>
                </div>
                <span className='p_text'>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</span>
                </div>
        </div>
    )
}