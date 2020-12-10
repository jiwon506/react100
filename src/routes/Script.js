import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Script','Reference','Script Reference']}/>
                        </div>
                        <div className="scriptCont">
                            <h1>Script Reference</h1>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Script;