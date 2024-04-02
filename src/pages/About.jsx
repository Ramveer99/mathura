import React from 'react'
import Banshi from '../image/banshi.png'
import '../stylecss/style.css'

function About() {
  return (
    <div>
       <div className='info-bg'>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     <div className="call-to-action-wrap">
                        <div className="row">
                           {/* <div className="col-xl-6">
                              <div className="number"><span>For More Information</span><span>+91 99978 46483</span></div>
                           </div> */}
                           <div className="col-xl-6">
                              {/* <ul className="banner-icon">
                                 <li><a href="https://www.facebook.com/ShriShivShankarTirthYatra/"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="https://www.instagram.com/tirthyatraindia/"><i className="fab fa-instagram"></i></a></li>
                                 <li><a href="https://www.youtube.com/channel/UC0ADW81WsefZVjMxSwVlgOA" rel="nofollow" title="Youtube" target="_blank"><i className="fab fa-youtube"></i></a></li>
                              </ul> */}

                  
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    <div className='about-contain '>
      <div className='about-main'>
      <img  src={Banshi} />
      </div>
    </div>
    <div>
   
    </div>
    </div>
  )
}

export default About