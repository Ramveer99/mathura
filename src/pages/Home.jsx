import React from 'react'
import "./Home.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Home() {
  return (
    <>
      <div style={{
        width: "90%",
        margin: "auto",
        fontSize: "55px"
      }}>
        <h1 style={{

          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          color: "#ff5d5d"

        }}> Explore  <span style={{
          color: "black"
        }}>Mathura </span> </h1>
      </div>
      {/* images  */}
      <div style={{
        display: "flex",
        width: "90%",
        margin: "auto",
        height: "450px",
        borderRadius: "5px"

      }}>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-p/0d/99/ad/94/img-20161106-162655-largejpg.jpg" alt="" style={{
            width: "700px",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px"
          }} />
        </div>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/03/a2/d1/d4/mathura.jpg" alt=""
            style={{
              height: "50%",
              width: "100%",
              objectFit: "cover",
              borderTopRightRadius: "10px",
            }}
          />
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/f5/85/21/country-inn-kosi.jpg" alt=""
            style={{
              height: "50%",
              width: "100%",
              position: "relative",
              top: "-3px",
              objectFit: "cover",
              borderBottomRightRadius: "10px"
            }}
          />
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        margin: "auto",
        fontSize: "12px",
        marginTop: "20px"

      }}>
        <p> AsiaIndiaUttar PradeshMathura DistrictMathura</p>
        <p> Plan Your Trip to Mathura: Best of Mathura Tourism</p>
      </div>

      {/* background images  */}
      <div class="container">
        <div className='child'>
        </div>
        <div style={{
          position:"relative",
          top:"-230px",
          color:"white",
          marginLeft:"40px",
          
        }}>
          <h1 style={{
            fontSize:"40px",
            color:"white"
          }}> Find Buses  deals to Mathura</h1>
          <p style={{
            fontSize:"20px",
            position:"relative",
            top:"-20px"
          }}> Search, compare filter and read reviews to find the right bus for you</p>
          <button  className='btn' style={{
            padding:"18px  35px",
            borderRadius:"90px",
            backgroundColor:"white",
            border:"none",
            fontSize:"16px",
            fontWeight:"600"
          }}> Start Search</button>
        </div>
      </div>
      <p style={{
        width:"90%",
        margin:"auto",
        marginTop:"70px",
        fontSize:"25px",
        fontWeight:"600"
      }}> Plan your trip</p>
      <div className='image1' style={{
        position:"relative", top:"-20px"
      }}>
   <h1 style={{
    color:"white",
    width:"50%",
    marginLeft:"58px",
    paddingTop:"90px",
    fontSize:"30px"


   }}> Get a personalised itinerary just for you, guided axict location of mathura .</h1>
  <div style={{
    position:"relative",
    top:"71px",
    
    left:"70px"
  }}>
  <SearchRoundedIcon/>
  </div>
  
  <input type="text" placeholder='Mathura'  style={{
    marginLeft:"58px",
    height:"50px",
    width:"40%",
    marginTop:"30px",
    borderRadius:"90px",
    border:"none",
    paddingLeft:"40px",
    fontWeight:"600",
    fontSize:"18px",
    color:"black"

  }} />

  <ArrowForwardIcon style={{
    position:"relative",
    left:"-50px",
    top:"12px",
    backgroundColor:"#dfd3ee",
    padding:"7px",
    borderRadius:"90px"
  }}/>
</div>
    </>

  )
}

export default Home