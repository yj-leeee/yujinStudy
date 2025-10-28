//Share.jsx

import './Share.css';
import fackbook from '../img/icon-facebook.svg';
import pinterest from '../img/icon-pinterest.svg';
import twitter from '../img/icon-twitter.svg';
import ShareBtn from './ShareBtn';
export default function Share({isShareOpen, toggleShare}){
    return(
        <div id='share_con'>
            <p id='share_p'>S H A R E</p>
            <div className='icon'>
                <img src={fackbook}/>
            </div>
            <div className='icon'>
                <img src={twitter}/>
            </div>
            <div className='icon'>
                <img src={pinterest}/>
            </div>
            <ShareBtn className='sharebtncon' isActive={isShareOpen} onClick={toggleShare} />
        </div>
    )
}