export enum Country {
    'Colombia' = 'CO',
    'Mexico' = 'MX',
    'Chile' = 'CH',
    'Argentina' = 'AR' 
}

export type ControllerResponse<T> = 
    | {
        success: true,
        code: number,
        res: T
    }
    | {
        success: false,
        code: number,
        error: {
            msg: string
        }
    }