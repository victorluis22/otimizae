export interface TableProps {
    type: MethodType
    data: GoldenDataProps | BissectionDataProps | NewtonDataProps
}

export type RowsType = GoldenDataSingleProps | BissectionDataSingleProps | NewtonDataSingleProps;
export type MethodType = "golden" | "bissection" | "newton"

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
    [index: string]: number
    time: number
    a: number
    b: number
    d: number
    x1: number
    fx1: number
    x2: number
    fx2: number
}

export interface BissectionDataProps{
    time: number[]
    a: number[]
    b: number[]
    lmbda: number[]
    flmbda: number[]
}

export interface BissectionDataSingleProps{
    [index: string]: number
    time: number
    a: number
    b: number
    lmbda: number
    flmbda: number
}

export interface NewtonDataProps{
    time: number[]
    firstderiv: number[]
    secondderiv: number[]
    lmbda: number[]
    lmbdanext: number[]
}

export interface NewtonDataSingleProps{
    [index: string]: number
    time: number
    firstderiv: number
    secondderiv: number
    lmbda: number
    lmbdanext: number
}