import React from 'react';
import CityModel from '../models/CityModel';
import CreatePostForm from '../components/CreatePostForm.jsx'

class CityShowPage extends React.Component {
    state = {
        name: "",
        picture: "",
        posts: []
    }

    componentDidMount() {
        const cityId = this.props.match.params.cityId

        CityModel.showCity(cityId).then((data) => {
            console.log("city show data")
            console.log(data)
            this.setState({
                name: data.name,
                picture: data.picture,
                posts: data.posts
            })
        })
    }
    createPost = (post, cityID)=> {
        
        CityModel.newPost(cityID, post).then((res) => {
            let resPosts = this.state.posts    
            console.log("resPosts=")
            console.log(resPosts)
            console.log("res is")
            console.log(res.data)
            resPosts.push(res)
            this.setState({
                posts: resPosts
            })
            
        })
        
    }
    
    render() {
        const allPosts = this.state.posts.map((onePost, idx) => {
            return <li key={idx}>
                <h4>{onePost.title}</h4>
                <p>{onePost.content}</p>
            </li>
        })
        return (
            <div>
                <h1>yeah this work</h1>
                <h3>{this.state.name}</h3>
                <img src={this.state.picture} alt="" />
                <CreatePostForm cityID={this.props.match.params.cityId}createPost={this.createPost}/>
                {allPosts}
            </div>
        )
    }
}

export default CityShowPage;