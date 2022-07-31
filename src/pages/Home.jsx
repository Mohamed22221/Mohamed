import React from 'react'
import styled from 'styled-components'
import Particless from '../components/Pratcless'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
const Home = () => {
  return (

    <MainHome>

      <div className='particles-js'>
        <Particless />
      </div>
      <div className='home'>
        <h1>Hi , I am<span> Mohamed Hamdy</span></h1>
        <div className='apout-home'>
        I am a frontend react developer. I can provide clean code and pixel perfect design. I also make website mor
        e & more interactive with web animations.
        </div>
        <div className='icons'>
          <a href='https://github.com/Mohamed22221' target="_blank">
            <GitHubIcon className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/mohamed-al-asfar-94b992219' target="_blank">
            <LinkedInIcon className='icon' />
          </a>
          <a href='https://codesandbox.io/dashboard/all/?workspace=78ee9af8-5478-4fa7-83f1-ee5967995564' target="_blank">
            <CodeIcon className='icon' />
          </a>

        </div>
      </div>
    </MainHome>
  )
}
const MainHome = styled.div`
    width:100% ;
    height:100vh ;
    position: relative;
    .particles-js{
    z-index:0;
    }
    .home{
      
     position:absolute ;
     top:50% ;
     left:50% ;
     transform:translate(-50%,-50%) ;
      z-index:100 ;
      text-align:center ;
      .apout-home {
        padding:5px 0 ;
      
     }
      h1 {
        font-size: 64px ;
        color:var(--white-color) ;
          @media (max-width:1100px) {
      
      
    }
      span{
        font-size:inherit;
        color:var(--primary-color)
        
      } 
      
    }
      .icons{
        padding:5px ;
         .icon{
           padding:5px 5px ;
           font-size:40px ;
           margin: 0 8px ;
           border: 2px solid var(--border-color) ;
           border-radius:50% ;
           &:hover{
             border-color:var(--primary-color) ;
             transition:0.5s ease-in-out;
             color:var(--primary-color) ;
           }
         }
         
      }
    
    }
`

export default Home