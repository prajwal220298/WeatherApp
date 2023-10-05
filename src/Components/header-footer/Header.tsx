import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HistoryIcon from '@mui/icons-material/History'
import FeedbackIcon from '@mui/icons-material/Feedback'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  // Badge,
  CssBaseline,
  Divider,
  Drawer,
} from '@mui/material'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import './Header.styl'
import Footer from './Footer'
import LOGO from '../../assets/logo_weather.png'
import DrawerList from './DrawerList'
import SearchBar from './SearchBar'

const drawerWidth = 240

const pages = [
  {
    text: 'Recent Search',
    to: '/recentsearch',
    icon: <HistoryIcon />,
    index: 2,
  },
  { text: 'Feedback', to: '/feedback', icon: <FeedbackIcon />, index: 3 },
  {
    text: 'Contact Us',
    to: '/contactus',
    icon: <ContactSupportIcon />,
    index: 4,
  },
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export default function Header() {
  const navigate = useNavigate()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  React.useEffect(() => {
    setIndex()
  })

  const setIndex = () => {
    const index: number =
      window.location.pathname === '/'
        ? 0
        : window.location.pathname === '/favorite'
        ? 1
        : window.location.pathname === '/recentsearch'
        ? 2
        : window.location.pathname === '/feedback'
        ? 3
        : window.location.pathname === '/contactus'
        ? 4
        : 0
    setSelectedIndex(index)
  }

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleRouting = (event: React.MouseEvent<HTMLElement>, to: string) => {
    event.stopPropagation()
    setOpen(!open)
    navigate(to)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          open={open}
          sx={{
            background:
              'linear-gradient(90deg, rgba(53,16,113,1) 0%, rgba(231,189,109,1) 100%)',
          }}
        >
          <CssBaseline />
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleDrawerOpen}
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              className="appbar-logo"
              src={LOGO}
              alt="Weather logo"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedIndex(0)
                navigate('/')
              }}
              aria-hidden="true"
            />
            <SearchBar />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <NavLink className="navigation-link" to="/favorite">
                <IconButton sx={{ color: 'inherit' }}>
                  {/* <Badge badgeContent={4} color="error"> */}
                  <FavoriteIcon />
                  {/* </Badge> */}
                </IconButton>
                Favorites
              </NavLink>
              {pages.map((page, index) => (
                <NavLink className="navigation-link" key={index} to={page.to}>
                  <IconButton sx={{ color: 'inherit' }}>{page.icon}</IconButton>
                  {page.text}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ background: 'grey' }}>
            <img
              src={LOGO}
              alt="Weather logo"
              style={{
                cursor: 'pointer',
                padding: '0px 40px 0px 2px',
              }}
              onClick={() => {
                setSelectedIndex(0)
                setOpen(false)
                navigate('/')
              }}
              aria-hidden="true"
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <DrawerList
            selectedIndex={selectedIndex}
            handleRouting={handleRouting}
          ></DrawerList>
        </Drawer>
        <Main open={open}>
          <div style={{ paddingTop: '25px' }}>
            <Outlet />
          </div>
        </Main>
      </Box>
      <Footer />
    </>
  )
}
