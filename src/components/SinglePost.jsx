import { Component } from "react";
import EditForm from "./EditForm";
import '../css/CityShowPage.css';
import Post from './Post.jsx'

class SinglePost extends Component {
    state = {
        formStyle: {
            display: 'none'
        }
    }

    deleteClickedPost = () => {
        this.props.deletePost(this.props.cityID, this.props.post._id)
    }
    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
            ? this.setState({ formStyle: { display: 'none' } })
            : this.setState({ formStyle: { display: 'block' } });
    };
    render() {
        return (
            <li data-post-index={this.props.post._id}>
                <div>
                <Post onePost = {this.props.post} cityId = {this.props.cityID}/>
                    <p className = "singlepost-content">
                        {this.props.post.content}
                    </p>
                        <span
                            className='edit singlepost-button'
                            onClick={this.toggleBodyForm}
                        >
                            Edit
                        </span>
                        <span
                            className='remove singlepost-button'
                            onClick={this.deleteClickedPost}
                        >
                            Delete
                        </span>
                </div>
                <EditForm
                    post={this.props.post}
                    cityID={this.props.cityID}
                    style={this.state.formStyle}
                    updatePost={this.props.updatePost}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        )
    }
}
export default SinglePost