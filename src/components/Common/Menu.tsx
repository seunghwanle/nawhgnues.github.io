import React, { useState } from 'react'
import styled from '@emotion/styled'

interface MenuProps extends MenuStyledProps {
  title: string
  index: number
}

interface MenuStyledProps {
  active: boolean
  disabled?: boolean
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
  border-bottom: 1px solid lightgray;
`

const MenuTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const MenuIndex = styled.p`
  margin-right: 16px;
`

const MenuTitle = styled.h1<{ active: boolean; disable: boolean | undefined }>`
  font-size: 28px;
  color: ${props =>
    props.active ? 'crimson' : props.disable ? 'lightgray' : 'black'};
  ${({ active }) =>
    active &&
    `
    ::before {
      content: '@'
    } 
  `};
`

const Menu = ({ index, title, disabled, active }: MenuProps) => {
  const [hover, setHover] = useState(false)
  return (
    <MenuWrapper
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
    >
      <MenuTitleBox>
        <MenuIndex style={{ paddingTop: '10px', paddingLeft: '8px' }}>
          0{index}.
        </MenuIndex>
        <MenuTitle active={active} disable={disabled}>
          {title}
        </MenuTitle>
      </MenuTitleBox>
      {hover && !disabled && <span>→</span>}
    </MenuWrapper>
  )
}

export default Menu
