import React from 'react'
import styled from 'styled-components'
import { SideContent } from './SideContent'

const SideBar = () => {
  return (
    <MainNav>
     <SideContent />
    </MainNav>
  )
}



const MainNav = styled.div`
   
    
    width: 300px;
    background-color:var( --sidebar-dark-color);
    height: 100vh;
    position: fixed;
`
export default SideBar