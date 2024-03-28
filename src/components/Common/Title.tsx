import React from 'react'
import styled from '@emotion/styled'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 35px 0 35px;
`

const Title = styled.h1`
  font-size: 44px;
  color: rgb(255, 95, 77);
`

const AllCategory = styled.h1`
  font-size: 44px;
`

const TechTitle = function () {
  return (
    <TitleWrapper>
      <Title>#Tech</Title>
      <AllCategory>#All</AllCategory>
    </TitleWrapper>
  )
}

export default TechTitle
