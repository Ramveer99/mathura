import React from 'react'
import "./Context.css";
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailLockIcon from '@mui/icons-material/MailLock';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Contect() {
  return (

    // start with context pages that is also very importdents we know that
   
    <>
    <div className='backgroundimg'>
    <h1 style={{
      color:"white",
      paddingTop:"80px",
      paddingLeft:"50px",
      fontSize:"40px",
      fontWeight:"600"
    }}> Contect Mathura tirth Yatra   </h1>
    <button style={{
      border:"none",
      marginLeft:"52px",
      padding:"16px  60px",
      fontSize:"18px",
      fontWeight:"600",
      borderRadius:"10px",
      backgroundColor:"white"
    }}  className='btn2' > Contect us </button>
    </div>
    
    {/* form which is use for  */}
    <div className='container1'>
      <div className='left1'>
       <input type="text"  placeholder='Enter your name ' style={{
        width:"80%",
        marginTop:"40px",
        marginLeft:"20px",
        height:"40px",
        border: "1px solid #1111",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)", 
       
        paddingLeft:"20px"
       }}/>
        <input type="text"  placeholder='Enter your Email ' style={{
        width:"80%",
        marginTop:"40px",
        marginLeft:"20px",
        height:"40px",
        border: "1px solid #1111",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)", 
       
        paddingLeft:"20px"
       }}/>
        <input type="text"  placeholder='Enter your Phone ' style={{
        width:"80%",
        marginTop:"40px",
        marginLeft:"20px",
        height:"40px",
        border: "1px solid #1111",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)", 
        
        paddingLeft:"20px"
       }}/>
       <br />
       <button  className='smt' style={{
          marginTop:"40px",
          marginLeft:"25px",
          border: "1px solid #1111",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)", 
          padding:"17px  210px",
          backgroundColor:"white",
          fontSize:"17px",
          fontWeight:"600"

       }}> Submmit </button>
      </div>
      <div className='right'>
      <div className='right1'>
        <h1 className='bt' style={{
          top:"0px",
          color:"white",
          position:"relative",
          top:"-23px",
          height:"80px",
         borderTopRightRadius:"10px",
         borderTopLeftRadius:"10px",
         paddingTop:"26px",
         paddingLeft:"100px"
         
        }}> Best practce pages  </h1>
        <p style={{
          fontWeight:"400",
          paddingLeft:"20px",
          fontSize:"16px",
          width:"90%",
          top:"0%",
          lineHeight:"30px",
          position:"relative",
          top:"-30px"
        }}>  sed, minus nam consequuntur officiis aspernatur? Ad quod, quisquam, quas quia porro, mollitia neque tenetur doloremque nulla exercitationem voluptate! Nobis.</p>
       <div style={{
        position:"relative",
        top:"-30px"

       }}>
       <div style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          marginLeft:"20px"
        }}>
          <HomeIcon/>
          <p> Gurugram section 10002324 Near by uttrakhand </p>
        </div>
        <div style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          marginLeft:"20px"
        }}>
          <PhoneInTalkIcon/>
          <p> 908989083453, 23534532534 </p>
        </div>
        <div style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          marginLeft:"20px"
        }}>
          <MailLockIcon/>
          <p> akysdfsaga@gmail.com </p>
        </div>
       </div>
      </div>
      </div>
    </div>
      {/* Our offices  */}
  <div className='background'>
  <div style={{
        width:"90%",
        margin:"auto",
        color:"black",
        paddingTop:"30px  "
      }}>
        <h1> Our Offices </h1>
      </div>
      <div style={{
        width:"90%",
        margin:"auto",
        paddingTop:"40px",
        display:"flex",
        justifyContent:"space-between"
      }}> 
       
          <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

      </div>
      <div style={{
        width:"90%",
        margin:"auto",
        paddingTop:"40px",
        display:"flex",
        justifyContent:"space-between"
      }}> 
       
          <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg"
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

      </div>
    
  </div>

      </>
  )
}

export default Contect