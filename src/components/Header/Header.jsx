// In any component
import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header() {
  return (
    <>
    <div
    style={{
        borderBottom:"1px solid #1111",
    }}
    >

 
<div style={{
    display:"flex",
    width:"90%",
    margin:"auto",
    alignItems:"center",
    justifyContent:"space-between",
  
   
}}>
   <div style={{
display:"flex", 
 alignItems:"center",
 gap:"40px"
}}>
      <h1> <span style={{
        color:"red"
      }}> Ma</span>thura</h1>
      <Link to="/"  className='home'
      
      style={{
        textDecoration:"none",
        
        fontSize:"17px",
        fontWeight:"350"
      }}
      
      >Home</Link>
      <Link to="/about"
      className='home'
      style={{
        textDecoration:"none",
        color:"black",
        fontSize:"17px",
        fontWeight:"350"
         
      }}
    
      >About</Link>
      <Link to="/contect"
       className='home'
      style={{
        textDecoration:"none",
        color:"black",
        fontSize:"17px",
        fontWeight:"350"
      }}
      >Contect</Link>
      <div  style={{
        position:"relative",
        right:"-80px",
        top:"3px",
        color:"#e0e0e0"

      }}>
      <SearchRoundedIcon/>
      </div>
    
       <input type="text"   placeholder='Search' style={{
        width:"300px",
        height:"30px",
        borderRadius:"90px",
        border:"2px solid #e0e0e0",
        paddingLeft:"40px",
        

       }}/>
   </div>
  
     
    <div style={{
        display:"flex",
        gap:"25px"
    }}>

     <button className='home1'
     
     style={{
        border:"none",
        background:"none",
        fontSize:"15px",
        alignItems:"center",
        display:"flex",
        gap:"10px"
     }}>
         <ContactSupportIcon/>
    Support
     </button>
     <button className='home1'
      style={{
        padding:"10px 12px 10px 12px ",
        border:"1px solid black", 
        borderRadius:"10px",
        background:"none",
        fontSize:"15px",
        alignItems:"center",
        display:"flex",
      }}
     >
        <AccountCircleIcon/>
    My Booking
     </button>
    </div>
    </div>
    
    </div>
    <div style={{
          backgroundColor:"#1111"
    }}> 

 
    <div  style={{
        width:"95%",
        margin:"auto",
        display:"flex",
        height:"80px",
      

    }}>
 <ul style={{
    display:"flex",
    gap:"30px",
    listStyle:"none",
    marginTop:"30px",
    fontSize:"18px",
    fontWeight:"360"
    
    
 }}>
<li>  <Link to="/mathura"  >Mathura</Link></li>
<li> <Link to='/visitpage'>Places To  Visit </Link></li>
<li> <Link to='/package'>Packegs</Link></li>
<li> Hotels</li>
<li>  How to Reach </li>
<li>Best Time To Visit </li>
<li>  <Link to="/photo"  >Photo</Link></li>

<li> Food</li>

<li style={{
    display:"flex"
}}> More   <KeyboardArrowDownIcon/>   </li>
 </ul>

 </div>
    </div>
   
   {/* search direction */}
  
    </>

  );
}

export default Header;
