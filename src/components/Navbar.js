import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import { InputBase } from '@mui/material';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {

  const ToolbarSearch = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 20px',
    width: '40%',

  }))

  const Profile = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  }))

  const ProfileName = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }))

  return (
    <>
      <AppBar position='sticky' >
        <ToolbarSearch>
          <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>hello</Typography>
          <Search>
            <InputBase placeholder='Search ...' />
          </Search>

          <Profile>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar sx={{ width: '30px', height: '30px' }} alt="Ujjwal Baldaniya" src="https://i.pravatar.cc/300" />

            {/* <ProfileName >
              <Avatar sx={{ width: '30px', height: '30px' }} alt="Cindy Baker" src="https://i.pravatar.cc/300" />
              <Typography>Ujjwal</Typography>
            </ProfileName> */}

          </Profile>

        </ToolbarSearch>
      </AppBar>

    </>
  )
}

export default Navbar