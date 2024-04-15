import React from 'react'
import styled from '@emotion/styled'
import { useLocation } from '@reach/router'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`

const Title = styled.h1`
  font-size: 44px;
  color: rgb(255, 95, 77);
`

const AllCategory = styled.h1`
  font-size: 44px;
`

const TechTitle = function () {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const category = params.get('category')

  return (
    <TitleWrapper>
      <Title>#Tech</Title>
      <AllCategory>{category ? `#${category}` : '#ALL'}</AllCategory>
    </TitleWrapper>
  )
}

export default TechTitle
