import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  font-size: 13px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Copyright = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #505050;
  margin-bottom: 2px;
`

const DevelopedInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #505050;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <Copyright>Copyright ©nawhgnues All rights reserved.</Copyright>
      <DevelopedInfo>
        2024 | built with gatsby | Developed by nawhgnues
      </DevelopedInfo>
    </FooterWrapper>
  )
}

export default Footer
