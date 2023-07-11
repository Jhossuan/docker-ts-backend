import { Router, Response, Request } from "express";
import { ServerStatus } from "../controllers/ServerStatus";

export class ServerRouter {
    private static instance: ServerRouter
    private router: Router;

    private constructor() {
        this.router = Router();
        this.router.get('/status', this.GetServerStatus)
    }

    static getRouter(): Router {
        if (!ServerRouter.instance) {
			ServerRouter.instance = new ServerRouter();
		}
		return ServerRouter.instance.router;
    }

    private GetServerStatus = async(req: Request, res: Response) => {
        try {
            const response = await ServerStatus.getStatus()
            if(!response.success){
                return res.status(response.code).send(response.error)
            }
            return res.status(response.code).send(response.res)
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    }

}