import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Pagination} from '@mui/material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const columns = [
  { id: 'no', label: 'No', Width: 50 },
  { 
    id: 'writer', 
    label: 'Writer', 
    Width: 60,
    align: 'center',
  },
  {
    id: 'subject',
    label: 'Subject',
    minWidth: 170,
    align: 'center',
    backgroundcolor: 'black',
    format: (value) => value.toLocaleString('UTF-8'),
  },
  {
    id: 'write_date',
    label: 'Write Date',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable( {list, changePage} ) {

  const router = useRouter();

//   function goWrite() {
//     // 화면 전환
//     router.push( "/bbs/Write", );
//   }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ 
                    Height: 300,
                    Width: 300,                    
                    borderRadius: 2
                    }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    fontWeight:'bold', 
                    minWidth: column.minWidth, 
                    backgroundColor: "black", 
                    color: "white",
                    p: 2,
                    minWidth: 300,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} on>
                    <TableCell align='right'>{row.b_idx}</TableCell>
                    <TableCell align='right'>{row.writer}</TableCell>
                    <TableCell align='right'>{row.subject}{' '}<strong>[{row.commentList.length}]</strong></TableCell>
                    <TableCell align='right'>{row.write_date}</TableCell>
                  </TableRow>
                );
              })}
            
          </TableBody>
        </Table>
      </TableContainer>
        <Pagination sx={{mr:0, paddingRight:0}}
            component="div"
            count={5} 
            color="secondary" 
            onChange={ changePage } 
        />
        <Button variant="contained" onClick={() => { router.push( "/bbs/Write"); }}>글쓰기</Button>
    </Paper>
  );
}
