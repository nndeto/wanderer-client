import React from 'react';
import CityModel from '../models/CityModel';
import CreatePostForm from '../components/CreatePostForm.jsx'
import PostList from '../components/PostList.jsx'
import Header from '../components/Header';
import '../css/CityShowPage.css';


class CityShowPage extends React.Component {
    state = {
        name: "",
        picture: "",
        posts: []
    }

    //only mounts the data
    componentDidMount() {
        const cityId = this.props.match.params.cityId

        CityModel.showCity(cityId).then((data) => {
            this.setState({
                name: data.name,
                picture: data.picture,
                posts: data.posts
            })
        })
    }

    //functions that will change the data
    createPost = (post, cityID)=> {        
        CityModel.newPost(cityID, post).then((res) => {
            let resPosts = this.state.posts    
            resPosts.push(res)
            this.setState({
                posts: resPosts
            })            
        })        
    }

    deletePost = (cityId, postID)=>{
        console.log("deleting...")
        console.log(postID)
        console.log("cityid is")
        console.log(cityId)
        CityModel.deletePost(cityId,postID).then((res)=>{
            console.log("res is")
            console.log(res)
            let currentPosts = this.state.posts
            let updatedPosts= currentPosts.filter((post)=>{
                return post._id !== res._id
            })
            this.setState({posts:updatedPosts})
        }).catch((err)=>{
            console.log(err)
        })
    }
    updatePost = (cityId,postID,post)=>{
        CityModel.updatePost(cityId,postID,post)
            .then((res)=>{
                console.log("res is ")
                console.log(res)
                let updatePostList = this.state.posts
                let index = updatePostList.findIndex((p)=>{
                    return p._id === res._id
                }) 
                console.log(index)
                updatePostList[index]=res
                this.setState({posts:updatePostList})
            }).catch((err)=>{
                console.log(err)
            })
    }
    
    render() {
        return (
            <div className = "cityshow-body">
                <Header className = "cityshow-header"/>
                <div className = "cityshow-content">
                    <h3 className = "cityshow-title">{this.state.name}</h3>
                    <img width="400px" height="400px" className = "cityshow-image" src={this.state.picture} alt=""  />
                    <br />
                    <br />
                    <br />
                    <hr className = "cityshow-hr"/>
                    <h2 className = "section-caption">Add an Adventure</h2>
                    <CreatePostForm cityID={this.props.match.params.cityId}createPost={this.createPost}/>
                 
                    <PostList
                    posts={this.state.posts}
                    cityID={this.props.match.params.cityId}
                    deletePost={this.deletePost}
                    updatePost={this.updatePost}
                    />
                </div>
            </div>
        )
    }
}

export default CityShowPage;