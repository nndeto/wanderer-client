import { Link } from 'react-router-dom'
import '../css/CityList.css'

function CityList(props) {
    //variable that loops through the city data and returns just a name for our "sidebar"
    //what's most important here is that it has an onClick function that will get our index back to our container 
    //to update that state
    const allCities = props.cityData.map((oneCity, idx) => {
        return (
                <div className="card" key={idx}>
                    <article className="content">
                        <div className="content-img">
                            <Link to={`cities/${oneCity._id}`}>
                                <img width="300px" height="250px" className="city-img" src={oneCity.picture} />
                            </Link>
                        </div>
                        <div className="context-text">
                            <h3 className="title">
                                {oneCity.name}
                            </h3>
                        </div>
                    </article>
                </div>
        )
    })
        
return (
    <div>
        <div className="grid-wrapper">
            <div className="grid-body">
                {allCities}
            </div>
        </div>
    </div>
)
}

export default CityList