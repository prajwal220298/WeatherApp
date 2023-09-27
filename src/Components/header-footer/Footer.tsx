// import Box from '@mui/material/Box'
// import { styled } from '@mui/material/styles'
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
// // import { AppBar } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import { CssBaseline } from '@mui/material'

// const drawerWidth = 240

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }))

// function Footer() {
//   return (
//     <>
//       <Box
//         sx={{
//           // height: '50px',
//           // width: '100%',
//           // bottom: 0,
//           // paddingTop: 5,
//           // marginTop: 'auto',
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: 'calc(100vh - 164px)',
//         }}
//       >
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           // sx={{
//           //   zIndex: (theme) => theme.zIndex.drawer + 1,
//           //   position: 'bottom',
//           // }}
//         >
//           <Typography
//             sx={{
//               textAlign: 'center',
//               py: 1,
//               color: 'GrayText',
//             }}
//           >
//             {'Weather App © '}
//             {new Date().getFullYear()}
//             {' Build Version : 1.0'}
//           </Typography>
//         </AppBar>
//       </Box>
//     </>
//   )
// }

// export default Footer

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{
        textAlign: 'center',
        py: 1,
        color: 'GrayText',
      }}
    >
      {'Weather App © '}
      {new Date().getFullYear()}
      {' Build Version : 1.0'}
    </Typography>
  )
}

const defaultTheme = createTheme()

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 164px)',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            mt: 'auto',
            py: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            zIndex: (theme) => theme.zIndex.drawer + 1,
            position: 'bottom',
          }}
        >
          <Container>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
