import React from 'react'
import './package.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'



    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#e1c7ac',
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
      
      function createData(name, packages,price , days, inclusion) {
        return { name, packages, price, days, inclusion };
      }
      
      const rows = [
        createData('Mathura, Vrindavan', '₹ 10,99*', '2 Nights / 3 Days', 'Hotels, Car, Sightseeing, Meals', 'Get Quotes '),
        createData('Mathura, Vrindavan', '₹ 10,99*', '2 Nights / 3 Days', 'Hotels, Car, Sightseeing, Meals', 'Get Quotes '),
        createData('Mathura, Vrindavan', '₹ 10,99*', '2 Nights / 3 Days', 'Hotels, Car, Sightseeing, Meals', 'Get Quotes '),
        createData('Mathura, Vrindavan', '₹ 10,99*', '2 Nights / 3 Days', 'Hotels, Car, Sightseeing, Meals', 'Get Quotes '),
        createData('Mathura, Vrindavan', '₹ 10,99*', '2 Nights / 3 Days', 'Hotels, Car, Sightseeing, Meals', 'Get Quotes '),
      ];

      const marks = [
        {
          value: 0,
          label: '1000',
        },
        {
          value: 20,
          label: '5000',
        },
        {
          value: 37,
          label: '8000',
        },
        {
          value: 100,
          label: '10000',
        },
      ];
      function valuetext(value) {
        return `${value}`;
      }


function Package() {



  return (
    <>
    <div className='package-table-main'>
        <div className='package-table-design'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Packages</StyledTableCell>
            <StyledTableCell align="right">	Price</StyledTableCell>
            <StyledTableCell align="right">Days&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Inclusion&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Quotes&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.packages}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.days}</StyledTableCell>
              <StyledTableCell align="right">{row.inclusion}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
       </TableContainer>
       </div>
           
        <div className='card-sidebar'>   
        <div className='cardai'>
          <div className='sidebarmanu-item'>
            <h4>Price Range (per person)</h4>
          <Box sx={{ width: 200 }}>
         <Slider
        aria-label="Custom marks"
        defaultValue={100}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="on"
        marks={marks}
      />
      </Box>
          </div>

        </div>
        <div className="cardDatapack">
            <h1>cmksncksncksnck</h1>
            <h1>cmksncksncksnck</h1>
            <h1>cmksncksncksnck</h1>
            <h1>cmksncksncksnck</h1>

        </div>
        </div>


      </div>


    </>
  )
}

export default Package