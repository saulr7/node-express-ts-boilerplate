import express, { Request, Response } from 'express';
import PostController from './controllers/postController';


class Server {

  private app: express.Application
  private postController : PostController
  
  constructor() {
    
    this.app = express()
    this.configuration()
    this.postController = new PostController()
    this.routes()
    
  }

  public configuration() {
    this.app.set("port", process.env.PORT || 3002)
  }

  public routes() {
    
    this.app.use('/api/posts/', this.postController.router)

    this.app.get('/', (req: Request, res: Response) => {
      res.send("It works")
    })

  }


  public start() {
    
    const PORT = this.app.get("port") || 0

    this.app.listen( PORT, () => {
      
      console.log(` Running at ${ PORT }`)

    } )

  }

}

export default Server