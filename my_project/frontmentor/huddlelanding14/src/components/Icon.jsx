import './Icon.css';
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Icon(prop){
    return (
        <div id='icon'>
            <CiFacebook className='icons'/>
            <FaTwitter className='icons'/>
            <FaInstagram className='icons'/>
        </div>
    )
}