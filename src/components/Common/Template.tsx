import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import { Helmet } from 'react-helmet'
import Header from './Header'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1; /* 메인 컨텐츠가 남은 공간을 모두 차지하도록 함 */
  width: 100%; /* 가로 너비 100% */
  padding: 60px 40px 0 40px;
`
const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <meta
          name="google-site-verification"
          content="enkZUlEHKWrWCFtLO0z_U7ghROr5pzfms_OzEwCbTqQ"
        />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  )
}

export default Template
