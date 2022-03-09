import React from 'react'
import styled from 'styled-components'
const Menue = ({menueItem}) => {
  return (
    <MenueStyle>
        {
            menueItem.map((item) =>{
                return (
                    <div className='main-item'>{item.category}</div>
                )
            })
        }
    </MenueStyle>
  )
}
const MenueStyle = styled.div`
    
`
export default Menue