import {Link} from 'react-router-dom'
import '../css/Header.css'
function Header(){
    return(
        <header>
            <nav className="page-header">
                <ul>
                    <li><Link to='/'><button className="nav-btn" id="btn"><span id="text">Home</span></button></Link></li>
                    <li><Link to = '/about'><button className="nav-btn" id="btn"><span id="text">About</span></button></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
