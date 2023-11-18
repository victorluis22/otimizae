export interface TableProps {
    type: "golden" | "bissection"
    data: GoldenDataProps | BissectionDataProps
}

export type RowsType = GoldenDataSingleProps | BissectionDataSingleProps;

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