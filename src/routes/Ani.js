import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aniCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Animation','Reference','Animation Reference']}/>
                        </div>
                        <div className="aniCont">
                            <h1>Animation</h1>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Ani;