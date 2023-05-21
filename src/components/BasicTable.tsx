import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxes from './CheckBoxes';
import { Input, Typography } from '@mui/material';

const createData = (number: string, date: string, starttime: string, endtime: string, consumedhours: number, clientname: string, contactperson: string, activitytype: string, product: string, activitydetails: string) => {
  return { number, date, starttime, endtime, consumedhours, clientname, contactperson, activitytype, product, activitydetails };
}

const rows = [
  createData('1', '05/10/2023', '7:30PM', '16:30PM', 9, 'Test', 'Test', 'Playing', 'Laptop', 'Nothing'),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}}>
      <TableHead>
          <TableRow>
            <TableCell><Typography>Employee Name</Typography></TableCell>
            <TableCell><Input></Input></TableCell>
            <TableCell><Typography>Department</Typography></TableCell>
            <TableCell><Input></Input></TableCell>
            <TableCell><Typography>Designation</Typography></TableCell>
            <TableCell><Input></Input></TableCell>
            <TableCell><Typography>Reporting Manager</Typography></TableCell>
            <TableCell><Input></Input></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Consumed Hours</TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Contact Person</TableCell>
            <TableCell align="center">Activity Type</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Activity Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center"><Input type='date'></Input></TableCell>
              <TableCell align="center"><Input type='time'></Input></TableCell>
              <TableCell align="center"><Input type='time'></Input></TableCell>
              <TableCell align="center"><Input placeholder='type here'></Input></TableCell>
              <TableCell align="center"><Input placeholder='type here'></Input></TableCell>
              <TableCell align="center"><Input placeholder='type here'></Input></TableCell>
              <TableCell align="center"><CheckBoxes/></TableCell>
              <TableCell align="center"><Input placeholder='type here'></Input></TableCell>
              <TableCell align="center"><Input placeholder='type here'></Input></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}