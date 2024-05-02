import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import Project from './Project' 
import './index.scss' 
import AnimatedLetters from '../AnimatedLetters'
const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return( 
       

        <>
      <div className="container projects-page">
        <div className="text-zone P-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j','e','c', 't', 's']}
              idx={15}
            />
          </h1>
                        
        </div>

        <div>
        <Project/>


        </div>
        
      </div>
      <Loader type="pacman" />
    </>

    )
}

export default Projects;