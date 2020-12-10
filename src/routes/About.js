import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AboutText({title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title}/>
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const aboutMe = [
    {
        id:1,
        title:'꿈을 설계하고 디자인하다',
        desc:'입사 후 디자이너로 일하던 시절 페이스북과 구글이 사람들의 일상에 미치는 파급력을 보고 IT에 관심을 가지게 되었습니다 제가 생활을 하면서        느끼는 불편함을 개선할 수 있는 프로젝트들을 구현해 보고 싶었으나 디자이너로서 할 수 있는 범위가 있기에 한계에 부딪치게 되었습니다',
        image: '../img/aboutImg01.jpg',
        image2x: '../img/aboutImg01@2.jpg 2x, ../img/aboutImg01@3.jpg'
    },
    {
        id:2,
        title:'꿈을 설계하고 디자인하다',
        desc:'입사 후 디자이너로 일하던 시절 페이스북과 구글이 사람들의 일상에 미치는 파급력을 보고 IT에 관심을 가지게 되었습니다 제가 생활을 하면서',
        image: '../img/aboutImg02.jpg',
        image2x: '../img/aboutImg02@2.jpg 2x, ../img/aboutImg02@3.jpg'
    },
    {
        id:3,
        title:'꿈을 설계하고 디자인하다',
        desc:'입사 후 디자이너로 일하던 시절 페이스북과 구글이 사람들의 일상에 미치는 파급력을 보고 IT에 관심을 가지게 되었습니다 제가 생활을 하면서',
        image: '../img/aboutImg03.jpg',
        image2x: '../img/aboutImg03@2.jpg 2x, ../img/aboutImg03@3.jpg'
    }
]

function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','about me']}/>
                        </div>
                        <div className="aboutCont">
                            {aboutMe.map((txt) => (
                                <AboutText key={txt.id} title={txt.title} desc={txt.desc} image={txt.image} />
                            ))}
                        </div>    
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;