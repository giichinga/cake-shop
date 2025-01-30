import '../CSS/Nav.css'
import logo from '../assets/cake_logo.png'
import cart from '../assets/cart.png'

function NavBar() {
    return (
        <>
        <nav>
            <div className="navWrapper">
                <div className="logo">
                    <a href='/'><img src={logo} alt="logo" /></a>
                </div>
                <div className="navLeft">
                    <a href="#">All Cakes</a>
                    <a href="#">Birthday Cakes</a>
                    <a href="#">Wedding Cakes</a>
                    <a href="#">Themed Cakes</a>
                    <a href="#">Cupcakes</a>
                    <a href="#">Add-ons</a>
                </div>
               
                <div className="navRight">
                    <a href='tel:+254703149288' >0703149288</a>
                    <a href="#"><img src={cart} /> </a>
                </div>
            </div>
        </nav>
        </>
    )

}

export default NavBar;