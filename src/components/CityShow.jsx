//not used

import Post from "./Post"

function CityShow(props) {
    let cityInfo = null

    //conditional that helps prevent something if the data call is slower than the page load 
    if (props.cityData === undefined) {
        cityInfo = {
            name:"",
            picture:"",
            posts:[{
                title:"",
                content:""
            }]
        }
    } else {
        cityInfo = props.cityData
    }

    //maps the data to access the props array (think recipelist and recipe component in one from the recipe lesson)
    const cityPosts = cityInfo.posts.map((onePost, idx) => {
        // console.log(cityInfo)
        return(
            <Post key = {idx} onePost = {onePost} cityId = {cityInfo._id}/>
        )
    })

    return (
        <div>
            <h1>{cityInfo.name}</h1>
            <img alt = "city" src = {cityInfo.picture}/>
            <br/>
            {cityPosts}
        </div>
    )
}

export default CityShow