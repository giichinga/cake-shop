import "../CSS/Footer.css";
import logo from '../assets/cake_logo.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twiter.png'
import whatsapp from '../assets/whatsapp.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <h1 className="footerTitle">
            <span><img src={logo} /></span><br/>
            Pat&apos;s Confectionery
          </h1>
          <p className="footerCredits">Made by Tonny</p>
        </div>

        <div className="footerColumn">
          <h2>Product</h2>
          <ul>
            <li><a href="#">Price List</a></li>
            <li><a href="#">Celebration Insights</a></li>
            <li><a href="#">Flavours</a></li>
            <li><a href="#">Cake Size Pricing</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h2>Social</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h2>Support</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help</a></li>
          </ul>

          <h2>Company</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Inclusion</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
      </div>

      <div className="footerIcons">
        <a href="#" aria-label="Twitter"><img src={twitter} /></a>
        <a href="#" aria-label="Instagram"><img src={instagram}/></a>
        <a href="#" aria-label="Whatapp"><img src={whatsapp}/></a>
      </div>
    </footer>
  );
};

export default Footer;
