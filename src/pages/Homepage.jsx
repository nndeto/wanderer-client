
import Banner from '../components/Banner.jsx'
import AboutContainer from './AboutContainer.jsx'
import CityContainer from './CityContainer.jsx'
import Footer from '../components/Footer.jsx'
import CityTitle from '../components/CityTitle.jsx'
import '../css/CityList.css'

function Homepage(){
    return(
        <div>
            <Banner/>
            <AboutContainer/>
            <CityTitle/>
            <CityContainer/>
            <Footer/>
        </div>
    )
}
export default Homepage