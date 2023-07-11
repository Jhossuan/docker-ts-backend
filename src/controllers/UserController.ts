import { ControllerResponse } from "../types";

export class UserController {

    static fileExample: Array<{ name: string, email: string }> = []

    static registerUser = async (name: string, email: string): Promise<ControllerResponse<Array<{ name: string, email: string }>>> => {
        try {

            if(!name || !email){
                return {
                    success: false,
                    code: 404,
                    error: {
                        msg: '[name - email] is required.'
                    }
                }
            }

            this.fileExample.push({ name, email })

            return {
                success: true,
                code: 200,
                res: this.fileExample
            }
        } catch (error) {
            return {
                success: false,
                code: 404,
                error: {
                    msg: 'Error at registerUser'
                }
            }
        }
    }

    static getUsers = async (): Promise<ControllerResponse<Array<{ name: string, email: string }>>> => {
        try {
            return {
                success: true,
                code: 200,
                res: this.fileExample
            }
        } catch (error) {
            return {
                success: false,
                code: 404,
                error: {
                    msg: 'Error at getUsers'
                }
            }
        }
    }


}