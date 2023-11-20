'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { BissectionDataSingleProps, GoldenDataSingleProps, MethodType, NewtonDataSingleProps, RowsType, TableProps } from './types';
import TableHeader from '../TableHeader';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function DataTable({type, data}: TableProps){
  const [rows, setRows] = React.useState(Array<RowsType>())
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const createRows = (type: MethodType) => {
    const precision = 12
    if (type === "golden" && "d" in data){ // Object data can be of various types, so "d" in data choses GoldenDataProps in this case
      const auxrows = Array<GoldenDataSingleProps>()
      const { time, a, b, d, x1, x2, fx1, fx2 } = data
    
      for (let i = 0; i < time.length; i++){
        auxrows.push({
          time: time[i], 
          a: parseFloat(a[i].toFixed(precision)), 
          b: parseFloat(b[i].toFixed(precision)), 
          d: parseFloat(d[i].toFixed(precision)), 
          x1: parseFloat(x1[i].toFixed(precision)), 
          fx1: parseFloat(fx1[i].toFixed(precision)), 
          x2: parseFloat(x2[i].toFixed(precision)), 
          fx2: parseFloat(fx2[i].toFixed(precision))
        })
      }
      setRows(auxrows)
    }
    else if (type === "bissection" && "flmbda" in data){
      const auxrows = Array<BissectionDataSingleProps>()
      const { time, a, b, lmbda, flmbda } = data
    
      for (let i = 0; i < time.length; i++){
        auxrows.push({
          time: time[i], 
          a: parseFloat(a[i].toFixed(precision)), 
          b: parseFloat(b[i].toFixed(precision)), 
          lmbda: parseFloat(lmbda[i].toFixed(precision)), 
          flmbda: parseFloat(flmbda[i].toFixed(precision)), 
        })
      }
      setRows(auxrows)
    }
    else if (type === "newton" && "firstderiv" in data){
      const auxrows = Array<NewtonDataSingleProps>()
      const { time, firstderiv, secondderiv, lmbda, lmbdanext } = data
    
      for (let i = 0; i < time.length; i++){
        auxrows.push({
          time: time[i], 
          firstderiv: parseFloat(firstderiv[i].toFixed(precision)), 
          secondderiv: parseFloat(secondderiv[i].toFixed(precision)), 
          lmbda: parseFloat(lmbda[i].toFixed(precision)), 
          lmbdanext: parseFloat(lmbdanext[i].toFixed(precision)), 
        })
      }
      setRows(auxrows)
    }
  }

  React.useEffect(() => {
    createRows(type)
  }, [data])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="Pagination Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Iteração</StyledTableCell>
            <TableHeader type={type} />
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row: RowsType) => {
            let properties = Object.keys(row)
            console.log(properties)
            return (
              <StyledTableRow key={row.time}>
                {properties.map((eachProp, index) => (
                  <StyledTableCell key={index}>
                    {row[eachProp]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            )
          })}
          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={8}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'Linhas por página',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
