import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'
import { PATH } from '../../routes/routes'
import Footer from './Footer'
import Menu from './Menu'

const MENU_INFO = [
  { title: 'Tech', link: PATH.index, disabled: false },
  { title: 'Diary', link: PATH.daily, disabled: true },
  { title: 'Project', link: PATH[404], disabled: true },
  { title: 'About', link: PATH[404], disabled: true },
  { title: 'Search', link: PATH.search, disabled: false },
]

const DrawerWrapper = styled.div<{ visible: boolean }>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 100 : 0)};
  z-index: ${props => (props.visible ? 9998 : -1)};

  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  padding-top: 72px; // padding top header

  background-color: #fafafa;
`

const DrawerMenu = styled.div`
  width: 100%;
  padding: 16px;
`

interface DrawerProps {
  visible: boolean
  path: string
}

const Drawer = ({ path, visible }: DrawerProps) => {
  return (
    <DrawerWrapper visible={visible}>
      <DrawerMenu>
        {MENU_INFO.map(({ title, link, disabled }, index) =>
          disabled ? (
            <Menu
              key={title}
              index={index}
              title={title}
              active={false}
              disabled
            />
          ) : (
            <Link key={title} to={link}>
              <Menu index={index} title={title} active={path === link} />
            </Link>
          ),
        )}
      </DrawerMenu>
      <Footer />
    </DrawerWrapper>
  )
}

export default Drawer
