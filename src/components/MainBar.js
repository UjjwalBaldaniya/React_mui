import { Box } from '@mui/material'
import React from 'react'
import CardDetail from './CardDetail'

const MainBar = () => {
  return (
    <Box flex={4} p={2}>
      <CardDetail mainImage={'https://loremflickr.com/g/320/240/paris'}/>
      <CardDetail mainImage={'https://loremflickr.com/320/240'}/>
      <CardDetail mainImage={'https://loremflickr.com/g/320/240/paris'}/>
      <CardDetail mainImage={'https://loremflickr.com/g/320/240/paris'}/>
    </Box>
  )
}

export default MainBar