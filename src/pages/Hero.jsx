import NavBar from "../components/Nav";
import ShoppingCard from '../components/ShoppingCard'
import Footer from "../components/Footer";
import '../CSS/Hero.css';
import { useRef } from "react";
import data from '../assets/cakes.json';
import { Parallax } from "react-parallax";  // npm install react-parallax

function Hero() {

    const shopRef = useRef(null);
    function scrollToShop() {
        shopRef.current.scrollIntoView({behavior: 'smooth'});
        
    }

    const specialCakes = data.filter(cakes => cakes.tags.includes('special'));
  

    return(
        <>
        <section className="hero">
            <NavBar/>
            <Parallax bgImage="../src/assets/wedding-festive-multistorey-cake-white-tone_839035-562200.jpg" strength={100}>
            <div className="heroContent">
                <h1>
                    Welcome to <span> Pat&apos;s Confectionery</span>
                </h1>
                <p>Your tastebuds have never had it so good!</p>
                <div className="buttons">
                <button className="enquireBtn">Enquire</button>
                <button className="shopBtn" onClick={scrollToShop} >Order Now!</button>

                </div>

            </div>
            <div className="custom-shape-divider-bottom-1738691148" >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            </Parallax>
        </section>
        <div className="shopWrapper" ref={shopRef} >
        <h1>This Week Valentines Specials</h1>
        <p>❤️Try this week signature selected cakes by our talented bakers to celebrate love❤️</p>
         <section className="miniShop" >
                {specialCakes.map((cake) => (
                    <ShoppingCard
                    key={cake.id}
                    itemId={cake.id}
                    src={cake.imageSrc}
                    name={cake.name}
                    price={cake.startingPrice}
                    />
                ))}
        </section>
        </div>

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