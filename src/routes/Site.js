import React from 'react';
import axios from 'axios';
import SiteInfo from '../components/SiteInfo';
// import Header from '../components/Header';
// import Title from '../components/Title';
// import Footer from '../components/Footer';
class Site extends React.Component {
    state = {
        isLoading : true,
        sites : []
    }
    getSites = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({ ports, isLoading : false });
        //console.log(sites.data.data.ports);
    }
    componentDidMount(){
        setTimeout(() => {
            this.getSites();
        },3000);
    }
    render(){
        const { isLoading, ports } = this.state
        return (
            <div>
                {isLoading 
                ? "로딩중입니다...." 
                : ports.map((info) => {
                    console.log(info);
                    return (
                        <SiteInfo 
                            key={info.id}
                            id={info.id}
                            link={info.link}
                            title={info.title}
                            image={info.image}
                            category={info.category}
                        />
                    )
                })}
            </div>
        )
    }
}

// function Site(){
//     return (
//         <div id="wrap">
//             <Header />
//             <main id="main">
//                 <section id="siteCont">
//                     <div className="container">
//                         <div className="titleWrap">
//                             <Title text={['site','Reference','site Reference']} />
//                         </div>
//                         <div className="siteCont">
//                             <div>site Reference</div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     )
// }
export default Site;