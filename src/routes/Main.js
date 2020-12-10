import React from 'react';
import Header from '../components/Header';

function Main(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="mainCont">
                        <div className="mainCont">
                            <h1>main</h1>
                        </div>
                </section>
            </main>
        </div>
    )
}

export default Main;