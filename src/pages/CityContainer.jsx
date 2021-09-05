import CityList from '../components/CityList.jsx'
import {Component} from 'react'
import CityModel from '../models/CityModel.js'
import CityShow from '../components/CityShow.jsx'


class CityIndex extends Component{
    state = {
        cityData: [],
        categoryIndex: 0
    }
    
    // grab data and add to state
        //so that we can then pass data down as props to all our different props
    componentDidMount() {
      this.fetchData()
    }

    //makes a call to our CityModel which then makes a call to our backend which hosts our data
    fetchData = () => {
        CityModel.all().then((data) => {
            // console.log("citymodel data")
            // console.log(data)
            this.setState({
                cityData: data
            })
        })
    }

    // map city names and images to a list
    updateCityIndex = (idx) => {
        this.setState({
            categoryIndex: idx
        });
    }

    render(){
        return(
            <div className="city-container">
                <CityList cityData={this.state.cityData} updateCityIndex={this.updateCityIndex}/>
                <CityShow cityData = {this.state.cityData[this.state.categoryIndex]}/> {/* top right, uses one city id */}
            </div>
        )
    }
}
    
export default CityIndex


