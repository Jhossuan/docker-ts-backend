import { ControllerResponse } from "../types"

export class ServerStatus {
    
    static getStatus = async (): Promise<ControllerResponse<any>> => {
        return {
            success: true,
            code: 200,
            res: {
                status: "Server active",
                code: 200,
                msg: "Este mensaje es por defecto"
            }
        }
    }

}