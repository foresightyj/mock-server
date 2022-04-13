export interface ApiResponse<T = void> {
    success: boolean,
    code: number,
    msg?: string,
    data?: T
}

export function ok<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        code: 200,
        data,
    }
}


export function fail(error: Error, code = 400): ApiResponse<any> {
    return {
        success: false,
        code,
        msg: error?.message ?? "unknown error"
    }
}