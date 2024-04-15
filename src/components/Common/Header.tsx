import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PATH } from '../../routes/routes'
import { useLocation } from '@reach/router'
import Tooltip from 'components/Controls/Tooltip'
import { useResponsive } from 'hooks/useResponsive'
import Drawer from './Drawer'

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 32px 0 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.15);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Logo = styled.h1`
  font-size: 16px;
`

const NavList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -10000;
    right: 84px;
  }
`

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

const NavName = styled.span<{
  active: boolean
  disabled?: boolean
  notYet?: boolean
}>`
  padding: 0 16px;
  color: ${props =>
    props.active
      ? 'rgb(255, 95, 77);'
      : props.notYet
        ? 'lightgray'
        : '#000000'};
  cursor: pointer;
`

const DesktopMenu = () => {
  return (
    <NavList>
      <StyledLink to={PATH.index}>
        <NavName active={location.pathname === PATH.index}>Tech</NavName>
      </StyledLink>
      {/* <StyledLink to="/daily"> */}
      <Tooltip tip="준비중...">
        <NavName active={location.pathname === PATH.daily} notYet={true}>
          Daily
        </NavName>
      </Tooltip>
      {/* </StyledLink> */}
      {/* <StyledLink to="/project"> */}
      <Tooltip tip="준비중...">
        <NavName active={location.pathname === PATH.project} notYet={true}>
          Project
        </NavName>
      </Tooltip>
      {/* </StyledLink> */}
      {/* <StyledLink to="/about"> */}
      <Tooltip tip="준비중...">
        <NavName active={location.pathname === PATH.about} notYet={true}>
          About
        </NavName>
      </Tooltip>
      {/* </StyledLink> */}
      <StyledLink to="/tags">
        <NavName active={location.pathname === PATH.search}>Search</NavName>
      </StyledLink>
    </NavList>
  )
}

const DrawerBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = ({
  visible,
  onClick,
}: {
  visible: boolean
  onClick: () => void
}) => (
  <DrawerBtn onClick={onClick}>
    {visible ? <p>Close</p> : <p>Open</p>}
  </DrawerBtn>
)

const Header: FunctionComponent = function () {
  const location = useLocation()

  const isMobileSize = useResponsive('768px')
  const [showDrawer, setShowDrawer] = useState(false)

  const handleDrawer = () => setShowDrawer(prev => !prev)

  useEffect(() => {
    if (!isMobileSize) {
      setShowDrawer(false)
    }
  }, [isMobileSize])

  return (
    <>
      <HeaderWrapper>
        <Logo>LOGO</Logo>
        <DesktopMenu />
        <MobileMenu visible={showDrawer} onClick={handleDrawer} />
      </HeaderWrapper>
      {isMobileSize && <Drawer path={location.pathname} visible={showDrawer} />}
    </>
  )
}

export default Header
