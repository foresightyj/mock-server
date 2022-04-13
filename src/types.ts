export interface ApiResponse<T = void> {
    success: boolean,
    msg?: string,
    data?: T
}

export function ok<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data,
    }
}


export function fail(error: Error): ApiResponse<any> {
    return {
        success: false,
        msg: error?.message ?? "unknown error"
    }
}