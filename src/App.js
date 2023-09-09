import React from 'react'
import Navbar from './components/Navbar'
import { Box, Stack, ThemeProvider } from '@mui/material'
import SideBar from './components/SideBar'
import MainBar from './components/MainBar'
import RightBar from './components/RightBar'
import Addicon from './components/Addicon'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2}>
        <SideBar />
        <MainBar />
        <RightBar />
      </Stack>
      <Addicon />
    </Box>
  )
}

export default App