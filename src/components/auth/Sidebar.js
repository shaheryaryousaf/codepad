import React, { useState } from 'react'
import { Image, Button } from 'react-bootstrap'

// Import Libraries
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from 'react-pro-sidebar'

import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles/Sidebar.module.css'
import 'react-pro-sidebar/dist/css/styles.css'

// Import Images
import icon1 from './assets/svgexport-5.svg'
import icon2 from './assets/svgexport-6.svg'
import icon3 from './assets/svgexport-7.svg'
import icon4 from './assets/svgexport-8.svg'
import icon5 from './assets/svgexport-9.svg'
import menuIcon from './assets/svgexport-3.svg'
import smallStar from './assets/svgexport-10.svg'

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false)

  return (
    <ProSidebar
      collapsed={collapse}
      breakPoint='md'
      style={{ backgroundColor: '#f4f4f4' }}
    >
      <SidebarHeader className={styles.sidebar__header}>
        {!collapse ? (
          <div
            className='sidebar-top'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            Demo Company{' '}
            <Image
              src={menuIcon}
              onClick={() => setCollapse(!collapse)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ) : (
          <Image
            src={menuIcon}
            onClick={() => setCollapse(!collapse)}
            style={{ cursor: 'pointer' }}
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape='square'>
          <MenuItem icon={<Image src={icon1} />}>
            <Link to='/dashboard'>Pads List</Link>
          </MenuItem>
          <MenuItem icon={<Image src={icon2} />}>
            <Link to='/dashboard'>Question Bank</Link>
          </MenuItem>
          <MenuItem icon={<Image src={icon3} />}>
            <Link to='/dashboard'>Files</Link>
          </MenuItem>
          <MenuItem icon={<Image src={icon4} />}>
            <Link to='/dashboard'>Databases</Link>
          </MenuItem>
          <MenuItem icon={<Image src={icon5} />}>
            <Link to='/dashboard'>Members</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter className={styles.sidebar__footer}>
        <Button variant='primary' block>
          Upgrade <Image src={smallStar} />
        </Button>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar
