import NavBar from "../components/Nav";
import ShoppingCard from '../components/ShoppingCard'
import Footer from "../components/Footer";
import '../CSS/Hero.css';
import { useRef } from "react";
import data from '../assets/cakes.json'


function Hero() {

    const shopRef = useRef(null);
    function scrollToShop() {
        shopRef.current.scrollIntoView({behavior: 'smooth'});
        
    }
  

    return(
        <>
        <section className="hero">
            <NavBar/>
            <div className="heroContent">
                <h1>
                    Welcome to <span> Pat&apos;s Confectionery</span>
                </h1>
                <p>Your tastebuds have never had it so good!</p>
                <button className="shopBtn" onClick={scrollToShop} >Order Now!</button>
            </div>
        </section>
        <hr/>
        <h1 className="miniShopIntro">Check out some of our treats</h1>
        <section className="miniShop" ref={shopRef}>
                {data.map((cake) => (
                    <ShoppingCard
                    key={cake.id}
                    itemId={cake.id}
                    src={cake.imageSrc}
                    name={cake.name}
                    price={cake.startingPrice}
                    />
                ))}
        </section>

        <hr/>
        <section className="about">
            <h1>About us</h1>
            <p> Pat&apos;s Confectionery is a family owned business based in Location X, We bake and design all kind of cakes from Wedding cakes, Birthday Cakes, Anniversary cakes and any type you can think of. We hope you will love our products!</p>
        </section> 
        <hr/>
        <Footer/>
        
        </>
    )


}

export default Hero;