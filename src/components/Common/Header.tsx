import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PATH } from '../../routes/routes'
import { useLocation } from '@reach/router'
import Tooltip from 'components/Controls/Tooltip'

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
`

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  padding: 0 16px;
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
  color: ${props =>
    props.active
      ? 'rgb(255, 95, 77);'
      : props.notYet
        ? 'lightgray'
        : '#000000'};
  cursor: pointer;
`

const Header: FunctionComponent = function () {
  const location = useLocation()
  console.log(location)

  return (
    <HeaderWrapper>
      <Logo>LOGO</Logo>
      <NavList>
        <StyledLink to={PATH.index}>
          <NavName active={location.pathname === PATH.index}>Tech</NavName>
        </StyledLink>
        <StyledLink to="/daily">
          <Tooltip tip="준비중...">
            <NavName active={location.pathname === PATH.daily} notYet={true}>
              Daily
            </NavName>
          </Tooltip>
        </StyledLink>
        <StyledLink to="/project">
          <Tooltip tip="준비중...">
            <NavName active={location.pathname === PATH.project} notYet={true}>
              Project
            </NavName>
          </Tooltip>
        </StyledLink>
        <StyledLink to="/about">
          <Tooltip tip="준비중...">
            <NavName active={location.pathname === PATH.about} notYet={true}>
              About
            </NavName>
          </Tooltip>
        </StyledLink>
        <StyledLink to="/tags">
          <NavName active={location.pathname === PATH.search}>Search</NavName>
        </StyledLink>
      </NavList>
    </HeaderWrapper>
  )
}

export default Header
