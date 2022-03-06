import React from 'react'
import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
const ServCards = () => {
  return (
    <MainServCard>
        <div className='item-card'>
            <BrushIcon className='icon-card' />
            <h4>Web Design</h4>
            <p>Assessed UX and UI designs for technical feasibility  
            </p>
        </div>
        <div className='item-card'>
            <CodeIcon className='icon-card' />
            <h4>Web Development</h4>
            <p>I am using technologies like React Js , redux&toolkit , Next Js
            </p>
        </div>
        <div className='item-card'>
            <AspectRatioIcon className='icon-card' />
            <h4>Responsive</h4>
            <p>experience designing and building responsive web design
            </p>
        </div>
    </MainServCard>
  )
}
const MainServCard = styled.div`
    display:grid ;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 18px ;
    
      ;
    .item-card{
        background-color:var(--sidebar-dark-color);
        padding:15px ;
        border-top: 6px solid var(--trasparent);
        transition:0.8s ;
        &:hover{
            border-top: 6px solid var(--primary-color);
        }
        &:hover h4::after{
            background-color:var(--primary-color)
        }
        
        h4{
            position:relative ;
            font-weight:900 ;
            
            &::after{
                content:"" ;
                height:5px ;
                width:60px ;
                position:absolute ;
                top:36px ;
                left:0 ;
                background-color:var(--trasparent);
                transition:0.8s ;
               
            }
        }
        p{
            padding:28px 0 8px 0 ;
        }
        .icon-card{
            font-size:70px ;
            color:var(--primary-color) ;
        }

    }
`
export default ServCards