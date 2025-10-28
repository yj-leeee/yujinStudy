//Profile.jsx

import './Profile.css'
import avatar from '../img/avatar-michelle.jpg';
import ShareBtn from './ShareBtn';
import Share from './Share';
import { useState } from 'react';

export default function Profile(){
    const [isShareOpen,setIsShareOpen] = useState(false);

    const toggleShare = () =>{
        setIsShareOpen(prev => !prev);
    };

    function Profilecontent(){
        return(
            <div className='con2'>
                <div className='con3'>
                <img id='profile_img' src={avatar}/>
                    <div id='profile_text'>
                        <p className='h3 texts' id='p2'>Michelle Appelton</p>
                        <p className='p1 texts'>28 Jun 2020</p>
                    </div>
                </div>
                <ShareBtn className='sharebtncon' isActive={isShareOpen} onClick={toggleShare} />
            </div>
        )
    }
    function Toggle(){
        return(
            <div className='con2'>
                <Share isActive={isShareOpen} onClick={toggleShare}/>
                {/* <ShareBtn className='sharebtncon' isActive={isShareOpen} onClick={toggleShare} /> */}
            </div>
        )
    }
    return(
        <div id='Profile'>
            {!isShareOpen && <Profilecontent />}
            <div id='share_area'>
                {isShareOpen && <Toggle />}
            </div>
        </div>
    )
}