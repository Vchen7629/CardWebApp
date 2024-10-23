import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/Footer';



const HomePage = () => {
   
    const content = (
        <section className="public">
            <Header/>
            <main className="top-[400px] w-100 h-[83vh] bg-radial-gray">
                <div 
                    className= "absolute left-[15%] top-[30%] w-[30%] font-black text-left text-8xl text-gold"
                >
                    Welcome to Dragon Nexus!
                </div>
                <div 
                    className=  "absolute left-[15%] top-[50%] w-[30%] text-left text-2xl"
                > 
                    All-in one website allowing you to catalog your card-collection and create 
                    custom decks
                </div>
                <div className="bg-[url('../img/dragonicon.png')] absolute top-1/4 left-[45%] bg-center bg-contain bg-no-repeat h-[45%] w-[45%]"/>
            </ main>
            <Footer/>
        </section>
    )
    return content
}

export default HomePage

