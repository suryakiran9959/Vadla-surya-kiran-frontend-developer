import "./ten.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


function Ten(){
    return(
        <footer className="footer">
        <div className="fa">
            <img src="/assets/Frame 43095.png" alt="img" />
            <span>EthAi</span>
            <div className="faimg">
               <div className="faimg1"><FaTelegramPlane className="FaTelegramPlane"/></div> 
               <div className="faimg2"><FaInstagram className="FaInstagram"/></div>
                <div className="faimg3"><FaXTwitter className="FaXTwitter "/></div>
              <div className="faimg4"><FaFacebookF className="FaFacebookF"/></div>
                <div className="faimg5"><FaDiscord className="FaDiscord"/></div>
            </div>
        </div>
            <h3 className="Designed">“Designed for traders of</h3>
              <h3 className="today"> today, just like you."</h3>
            <input type="text" placeholder="What's your work email?" />
            <p>Get Started</p>
        </footer>
    )
}
export default Ten;