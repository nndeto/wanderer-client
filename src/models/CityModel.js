const url = "https://wayfarer-wanderer.herokuapp.com/api/city"
class CityModel{
    static all(){
        return fetch(url)
            .then((response)=>{
                return response.json()
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    static newPost(cityId,post){
        return fetch(`${url}/${cityId}/posts`,{
            method:'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response)=>{
           
            return response.json()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    static deletePost(cityId, postId){
        return fetch(`${url}/${cityId}/posts/${postId}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
        }).then((response)=>{
            
            
            return response.json()
        }).catch((err)=>{
            console.log(err)
        })
    }
    static updatePost(cityId, postId, post){
        return fetch(`${url}/${cityId}/posts/${postId}`,{
            method:'PUT',
            body:JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response)=>{
            return response.json()
        }).catch((err)=>{
            console.log(err)
        })
    }    
    //makes a fetch call to our posts controller to show a post
    static showPost(cityId, postId) {
        return fetch(`${url}/${cityId}/posts/${postId}`)
            .then((response) => response.json())
    }
    static showCity(cityId) {
        return fetch(`${url}/${cityId}`)
        .then((response)=>{
            return response.json()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export default CityModel