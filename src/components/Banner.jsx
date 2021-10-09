import { Link } from 'react-router-dom'
import '../css/Homepage.css'

function Banner() {
    return (
        <div className = "homepage-container">
        <Link to = '/about'>
            <h1 className = "homepage-title">Wanderer</h1>
        </Link>
        <h3 className = "homepage-text">roam</h3>
        <h3 className = "homepage-text-one">explore</h3>
        <h3 className = "homepage-text-two">discover</h3>
    </div>
    )
}
export default Banner

