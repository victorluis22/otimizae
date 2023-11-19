export interface BaseProps{
    function: string
    interval: number[] 
    limit: number
}

export interface NewtonProps extends BaseProps{
    initialValue: number
}