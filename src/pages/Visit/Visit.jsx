import React,{useState} from 'react'
import Bus from '../../image/bus.png'
import BusSecond from '../../image/bus2.jpeg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './reach.css'

function Reach() {
 const [linebardisplay,setLinebardisplay]=useState(false)

  return (
    <>
     <div>
     <button onClick={()=>setLinebardisplay(!linebardisplay)}>Line map</button>&nbsp;

     <button>Bar map </button>    
     {linebardisplay ? <>         
     <section className="sign">
   <h1 className="line-name"><span className="line-type">M</span><span className="sign__line" data-line="m2">2</span> Janmasthan</h1>
   <ol className="line" data-line="m2">
    <li className="stop" data-transfer>
  
    {/* <Avatar alt="Remy Sharp" src={Bus} /> */}

      <strong className="stop__name">Dwarkadhish</strong>
      <div className="stop__transfers stop__transfers--walk">
        <div>
          <span className="stop__transfer stop__transfer--type-rer">  
           {/* <Avatar src={BusSecond}></Avatar> */}
          </span>
          {/* <span className="stop__transfer stop__transfer--rer" data-line="rerC">C</span> */}
        </div>
      </div>
    </li>
    <li className="stop">
      <strong className="stop__name">Raman bihariji</strong>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Birla Mandir</strong>
      <div className="stop__transfers activebus">
       <Avatar src={BusSecond}  sx={{ width: 56, height: 56 }}></Avatar>
        {/* <div> */}
          {/*  <span className="stop__transfer stop__transfer--type-m"> </span> */}
          {/* <span className="stop__transfer stop__transfer--m" data-line="m1">1</span>
          <span className="stop__transfer stop__transfer--m" data-line="m6">6</span> */}
        {/* </div> */}
        {/* <div>
          <span className="stop__transfer stop__transfer--type-rer">RER</span>
          <span className="stop__transfer stop__transfer--rer" data-line="rerA">A</span>
        </div> */}
      </div>
    </li>
    <li className="stop">
      <strong className="stop__name">Jugal Kishor</strong>
    </li>
    <li className="stop">
      <strong className="stop__name">Keshav Dev</strong>
    </li>
    <li className="stop">
      <strong className="stop__name">jai Gurudev</strong>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Chamunda Devi</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m3">3</span>
        </div>
      </div>
    </li>
    <li className="stop">
      <strong className="stop__name">Govardhan Hill</strong>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">shri Dauji maharaj</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m13">13</span>
        </div>
      </div>
     </li>
    <li className="stop">
      <strong className="stop__name">Shri Rang Nath </strong>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Shree Swaminarayan</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m12">12</span>
        </div>
      </div>
    </li>
    <li className="stop" data-transfer data-long-name>
      <strong className="stop__name">Shri Rangeshwar Mahadev<span className="stop__poi">Shri Rangeshwar Mahadev</span></strong>
      <div className="stop__transfers stop__transfers--walk">
        <div>
          <span className="stop__transfer stop__transfer--special">Funiculaire<br /> de&nbsp;Montmartre</span>
        </div>
      </div>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Peepleshar Mahadeo</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m4">4</span>
        </div>
      </div>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Yam Yamuna temple</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-rer">RER</span>
          <span className="stop__transfer stop__transfer--rer" data-line="rerB">B</span>
          <span className="stop__transfer stop__transfer--rer" data-line="rerD">D</span>
          <span className="stop__transfer stop__transfer--rer" data-line="rerE">E</span>
        </div>
      </div>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Shri Adi Varaha Temple</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m5">5</span>
          <span className="stop__transfer stop__transfer--m" data-line="m7">7</span>
        </div>
      </div>
    </li>
    <li className="stop" data-transfer>
      <strong className="stop__name">Nidhivan temple</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m5">5</span>
          <span className="stop__transfer stop__transfer--m" data-line="m7b">7<sub>bis</sub></span>
        </div>
      </div>
    </li>
    
   
    <li className="stop" data-transfer>
      <strong className="stop__name">ISKCON</strong>
      <div className="stop__transfers">
        <div>
          <span className="stop__transfer stop__transfer--type-m">M</span>
          <span className="stop__transfer stop__transfer--m" data-line="m1">1</span>
          <span className="stop__transfer stop__transfer--m" data-line="m6">6</span>
          <span className="stop__transfer stop__transfer--m" data-line="m9">9</span>
        </div>
        <div>
          <span className="stop__transfer stop__transfer--type-rer">RER</span>
          <span className="stop__transfer stop__transfer--rer" data-line="rerA">A</span>
        </div>
      </div>
    </li>
  </ol>
     </section>
     </> 
     :
     <>
     <h1>
        Bar map
     </h1>
     </>
     }

     </div>
    </>
  )
}

export default Reach