import { Router } from "express";
import { UserRouter } from "./UserRouter";
import { ServerRouter } from "./ServerRouter";

export class RootRouter {

    private static instance: RootRouter;
	private router: Router;

    constructor() {
        this.router = Router()
        this.router.use(`/${process.env.APP_VERSION}/user`, UserRouter.getRouter())
        this.router.use(`/${process.env.APP_VERSION}/server`, ServerRouter.getRouter())
    }

    static getRouter(): Router {
		if (!RootRouter.instance) {
			RootRouter.instance = new RootRouter();
		}
		return RootRouter.instance.router;
	}

}