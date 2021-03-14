import { Router, Request, Response } from "express"
import PostService from "../services/postService";



class PostController {

  
  public router: Router;
  private postService: PostService;


  constructor() {
    
    this.router = Router();
    this.postService = new PostService()
    this.routes()

  }


  public index = async (req: Request, res: Response) => {

    res.json( this.postService.index() )

  }
  
  
  public create = async (req: Request, res: Response) => {
    
    res.send( this.postService.create() )

  }


  public update = async (req: Request, res: Response) => {
    
    res.json( { ok : true } )

  }


  public routes() {

    this.router.get('/', this.index);
    this.router.get('/create', this.create);
    this.router.get('/update', this.update);
    
  }



}

export default PostController