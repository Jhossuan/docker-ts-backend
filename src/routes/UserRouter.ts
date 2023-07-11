import { Router, Response, Request } from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
    private static instance: UserRouter
    private router: Router;

    private constructor() {
        this.router = Router();
        this.router.post('/registerUser', this.RegisterUser)
        this.router.get('/users', this.GetUsers)
    }

    static getRouter(): Router {
        if (!UserRouter.instance) {
			UserRouter.instance = new UserRouter();
		}
		return UserRouter.instance.router;
    }

    private RegisterUser = async(req: Request, res: Response) => {
        try {
            const response = await UserController.registerUser(req.body.name, req.body.email)
            if(!response.success){
                return res.status(response.code).send(response.error)
            }
            return res.status(response.code).send(response.res)
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    }

    private GetUsers = async(req: Request, res: Response) => {
        try {
            const response = await UserController.getUsers()
            if(!response.success){
                return res.status(response.code).send(response.error)
            }
            return res.status(response.code).send(response.res)
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    }

}