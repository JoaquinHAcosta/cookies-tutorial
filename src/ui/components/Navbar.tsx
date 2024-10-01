import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>

        <Link href={'/'} passHref>
          <Typography variant="h6" color="white">
            CookieMaster
          </Typography>
        </Link>

        <div style={{ flex: 1 }} />

        <Link href={'/theme-changer'} passHref>
          <Typography variant="h6" color="white">
            Cambiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
