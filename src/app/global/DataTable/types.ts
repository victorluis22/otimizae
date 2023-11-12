export interface GoldenDataTableProps {
    data: GoldenDataProps
}

export interface GoldenDataProps{
    time: number[]
    a: number[]
    b: number[]
    d: number[]
    x1: number[]
    fx1: number[]
    x2: number[]
    fx2: number[]
}

export interface GoldenDataSingleProps{
    time: number
    a: number
    b: number
    d: number
    x1: number
    fx1: number
    x2: number
    fx2: number
}