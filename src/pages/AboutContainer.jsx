import React from 'react'
import Header from '../components/Header'
import '../css/Aboutcontainer.css'
// import AboutImage from '../images/aboutpage_bhutantemple.jpg'
import AboutImage from '../images/franck-charles-5OwvmNqjJ18-unsplash.jpg'
import {Link} from 'react-router-dom'


class AboutContainer extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <div id="main">
                
                    <section className="post">
                        <header className="major">
                            <h1>What is Wanderer?<br /></h1>
                            <p> We're the place for the cliff divers. The dreamers. The lovers of other worlds that exist next to our own.<br />
                                Through travel we believe you can become connected to your inner thrill-seeker and explorer. Creating your place in the vast, cultural experience that is the world,<br />
                                 one wandering at a time.</p>
                        </header>
                        <a href="#" className="image main"><img src={AboutImage} alt="" /></a>
                        <Link to = '/about'><button className="btn-main btn-1"><span>About</span></button></Link>
                    </section>

                </div>
            </div>

        )
    }
}

export default AboutContainer

