import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import {Layouts} from '../styles/Layouts'
import PortfolioData from '../data/PortfolioData'
import Menue from '../components/Menue'
const Portfolio = () => {
    const [menuItem , setMenue] = useState(PortfolioData)
  return (
    <Layouts>
    <MainPortfolio>
    <Title title={'portfolio'} span={'portfolio'} />
    <Menue menueItem={menuItem} />
    </MainPortfolio>
  </Layouts>
  
  )
}
const MainPortfolio = styled.div`
    
`
export default Portfolio