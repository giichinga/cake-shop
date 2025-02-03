import data from '../assets/cakes.json';
import '../CSS/Hero.css';
import NavBar  from '../components/Nav';
import Footer from '../components/Footer';
import ShoppingCard from '../components/ShoppingCard';

function Themed() {

    const themedCakes  = data.filter(cakes => cakes.tags.includes('themed'));
    console.log(themedCakes);

    return(
        <>
        <NavBar/>
        <h1 className='miniShopIntro'>All Cakes</h1>
        <section className='miniShop'>
        
        {
            themedCakes.map((cake) => (
                <ShoppingCard
                key={cake.id}
                itemId={cake.id}
                src={cake.imageSrc}
                name={cake.name}
                price={cake.startingPrice}
                />
            ))
        }
        </section>
        
        <Footer/>

        </>
    );

}

export default Themed;