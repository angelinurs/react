import { Grid, Table, Paper, 
    TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
  

function GetEmployeeList( {elist} )  {
    return (
        <div className="GetEmployeeList">
            
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="right">Employee Id</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Birth Date</StyledTableCell>
                    <StyledTableCell align="right">From Date</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                { elist.map( (emp, index) => (
                    <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                        {emp.empNo}
                    </StyledTableCell>
                    <StyledTableCell align="right">{emp.name}</StyledTableCell>
                    <StyledTableCell align="right">{emp.birthDate}</StyledTableCell>
                    <StyledTableCell align="right">{emp.fromDate}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default GetEmployeeList;