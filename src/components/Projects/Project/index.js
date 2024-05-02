
import htmlLogo   from '../../../assets/stack/HTML.png'
import CSSlogo from '../../../assets/stack/CSS.png'
import JavascriptLogo   from '../../../assets/stack/Javascript.svg'
import Git from '../../../assets/stack/Git.svg'
import ReactLogo from '../../../assets/stack/React.png'
import { FaLink } from "react-icons/fa";
import { 
    faGithub

  } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Project = () => {

    return(
        <div className="project-section">
          <div class="project-container">
            <div class="project-card" id="project1">
                <div class="project-number project-number-right">01</div>
                <div class="project-content project-content-left">
                    <div class="project-skills-container">
                         <img class="project-skill" src={htmlLogo} alt="" />
                         
                        <img class="project-skill" src={CSSlogo} alt="" />
                        <img class="project-skill" src={JavascriptLogo} alt="" />
                        <img class="project-skill" src={Git} alt="" />
                        <img class="project-skill" src={ReactLogo} alt="" />
                         
                     </div>
                     <h2 class="project-heading"> Netflix-Clone </h2>
                     <div class="project-sub-heading">Netflix Clone by Using React, Firebase and Stripe. </div>
                     <div class="btn-group">
                             {/* <button class="  btn-project flat-button">Read More</button>  */}
                            <a href="https://github.com/DhirajToor/React_Netflix_Clone"><FontAwesomeIcon
                                          icon={faGithub} 
                                          className="project-icon"
                                        />
                            </a> <a href="https://netflix-clone-by-dhiraj-toor.vercel.app/">
                                     <FaLink  
                                          className="project-icon"
                                     />
                            </a>
                        </div>
                </div>


                
            </div>

            <div class="project-card" id="project2">
                <div class="project-number project-number-left">02</div>
                <div class="project-content project-content-right">
                    <div class="project-skills-container">
                    <img class="project-skill" src={htmlLogo} alt="" />
                         
                         <img class="project-skill" src={CSSlogo} alt="" />
                         <img class="project-skill" src={JavascriptLogo} alt="" />
                         <img class="project-skill" src={Git} alt="" /> 
                     </div>
                     <h2 class="project-heading"> Weather </h2>
                     <div class="project-sub-heading">	
                       Weather Application using Javascript </div>
                        <div class="btn-group">
                             {/* <button class="  btn-project flat-button">Read More</button>  */}
                            <a href="https://github.com/DhirajToor/Weather-App"><FontAwesomeIcon
                                          icon={faGithub} 
                                          className="project-icon"
                                        />
                            </a> <a href="https://dhirajtoor.github.io/Weather-App">
                                     <FaLink 
                                        icon={FaLink} 
                                          className="project-icon"
                                     />
                            </a>
                        </div>
                </div>
            </div>

            
          </div>           
                  

          </div>
    )
}

export default Project;