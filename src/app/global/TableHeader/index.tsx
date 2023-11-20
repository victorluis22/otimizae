import { StyledTableCell } from "../DataTable"
import { TableHeaderProps } from "./types"

export default function TableHeader({type}: TableHeaderProps){
    const headers = {
        goldenHeaders: ["a", "b", "d", "x1", "f(x1)", "x2", "f(x2)"],
        bissectionHeaders: ["a", "b", "λ", "f(λ)"],
        newtonHeaders: ["f'(λ)", "f''(λ)", "λ", "λ+1"]

        
    }

    switch(type){
        case "golden":
            return (
                <>
                    {headers.goldenHeaders.map((eachHeader, index) => {
                    return <StyledTableCell key={index}>{eachHeader}</StyledTableCell>
                    })}
                </>
            )
        case 'bissection':
            return (
                <>
                    {headers.bissectionHeaders.map((eachHeader, index) => {
                    return <StyledTableCell key={index}>{eachHeader}</StyledTableCell>
                    })}
                </>
            )
        case "newton":
            return (
                <>
                    {headers.newtonHeaders.map((eachHeader, index) => {
                    return <StyledTableCell key={index}>{eachHeader}</StyledTableCell>
                    })}
                </>
            )
        default:
            return <StyledTableCell>Ocorreu algum erro</StyledTableCell>
        }
}
