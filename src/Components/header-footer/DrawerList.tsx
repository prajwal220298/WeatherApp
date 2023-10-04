import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HistoryIcon from '@mui/icons-material/History'
import FeedbackIcon from '@mui/icons-material/Feedback'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import {
  // Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

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

type props = {
  selectedIndex: number | undefined
  handleRouting: (event: React.MouseEvent<HTMLElement>, to: string) => void
}

export default function DrawerList({ selectedIndex, handleRouting }: props) {
  return (
    <List>
      <ListItem disablePadding divider>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(e) => {
            handleRouting(e, '/')
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: 'GrayText' }}>Home</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(e) => {
            handleRouting(e, '/favorite')
          }}
        >
          <ListItemIcon>
            {/* <Badge badgeContent={4} color="error"> */}
            <FavoriteIcon />
            {/* </Badge> */}
          </ListItemIcon>
          <ListItemText sx={{ color: 'GrayText' }}>Favorites</ListItemText>
        </ListItemButton>
      </ListItem>
      {pages.map((page, index) => (
        <ListItem key={index} disablePadding divider>
          <ListItemButton
            selected={selectedIndex === page.index}
            onClick={(e) => {
              handleRouting(e, page.to)
            }}
          >
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText sx={{ color: 'GrayText' }}>{page.text}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
