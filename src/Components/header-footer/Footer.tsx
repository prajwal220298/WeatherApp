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
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: 99,
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
