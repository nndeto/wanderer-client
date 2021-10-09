import {Link} from 'react-router-dom'
import '../css/CityShowPage.css';

function Post(props) {
    return(
        <div>
            <Link to = {{pathname:`${props.cityId}/posts/${props.onePost._id}`, cityID:props.cityId} }>
                <h3 className = "post-title">{props.onePost.title}</h3>
            </Link>
            
        </div>
    )
}

export default Post