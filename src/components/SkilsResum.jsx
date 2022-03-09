import React, { createContext, useRef } from 'react'
import styled from 'styled-components'
import {LayoutCulame} from '../styles/Layouts'
import Title from '../components/Title'
import ProgresPar from './ProgresPar'

const SkilsResum = () => {
  return (
    <SkilsResume >
        <Title title={'MY SKILLS'} span={'MY SKILLS'} />
        <LayoutCulame>
            <div className='skils'>    
           <ProgresPar 
           title="html/html5"
           text="90%"
           width="90%"
           />
           <ProgresPar 
           title="css/css3"
           text="85%"
           width="85%"
           />
           <ProgresPar 
           title="bootstrap 5"
           text="70%"
           width="70%"
           />
           <ProgresPar 
           title="Javascript"
           text="80%"
           width="80%"
           />
           <ProgresPar 
           title="React.JS"
           text="90%"
           width="90%"
           />
           <ProgresPar 
           title="Next.js"
           text="50%"
           width="60%"
           />
          <ProgresPar 
           title="bootstrap React"
           text="65%"
           width="65%"
           />
           <ProgresPar 
           title="styled-components"
           text="90%"
           width="90%"
           />
           <ProgresPar 
           title="material ui"
           text="60%"
           width="60%"
           />
            <ProgresPar 
           title="git/github"
           text="85%"
           width="85%"
           />
            
           </div>
        </LayoutCulame>
    </SkilsResume>
  )
}
const SkilsResume = styled.div`
    position: relative ;
    z-index:100 ;
    .skils{
        display:grid ;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width:800px) {
        grid-template-columns: repeat(1, 1fr); 
    }
    }

`
export default SkilsResum