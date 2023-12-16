import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress } from '@mui/material';


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


export default function CustomizedTables({tableHeaders,tableData,handleEdit,handleDelete,isLoading
}) {
  return (
    <TableContainer style={{height: 'calc(100vh - 160px)'}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header)=><StyledTableCell style={{
                fontWeight:'bold'
            }} align="center">{header}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>

          {isLoading ? <div style={{ width:'100vw' , height:'200px', display:'flex', justifyContent:'center',alignItems:'center'}}> <CircularProgress /></div> :
 tableData.map((row,id) => (
            <StyledTableRow key={id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row?.zipcode}
              </StyledTableCell>
              <StyledTableCell align="center">{row?.typeOfShipping}</StyledTableCell>
              <StyledTableCell align="center">{row?.shippingCost}</StyledTableCell>
              <StyledTableCell align="center">{row?.deliveryDuration}</StyledTableCell>
              <StyledTableCell align="center" style={{ display:'flex', justifyContent:'center', gap:'8px'}}>
                <EditIcon style={{cursor:'pointer'}} color='primary' onClick={()=>{
                  handleEdit(row)
                }} />
                <DeleteIcon style={{cursor:'pointer'}} color='error' onClick={()=>{handleDelete(row)}} />
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}