

class PostService {



  public index = () => {
    
    const posts = [ { ok : true }, { ok : true }, { ok : false } ]
    return posts
    
  }
  
  
  
  public create = () => {
    
    return "create post"

  }
  
  
  
  public update = () => {
    
    return "create update"

  }



}

export default PostService