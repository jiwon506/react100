import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function Reference(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="referCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Reference','Book','Reference Book']}/>
                        </div>
                        <div className="referCont">
                            <table>
                                <th>테이블</th>
                                <th>만들기</th>
                                <tr>첫번째 줄 시작
                                    <td>첫번째 칸</td>
                                    <td>두번째 칸</td>
                                </tr> 첫번째 줄 끝
                                <tr>두번째 줄 시작
                                    <td>첫번째 칸</td>
                                    <td>두번째 칸</td>
                                </tr>두번째 줄 끝
                            </table>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Reference;