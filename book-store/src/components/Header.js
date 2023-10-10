import React, { useState } from 'react'
import { AppBar, Toolbar, Typography , Tabs ,Tab } from '@mui/material'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { NavLink } from 'react-router-dom';

function Header() {
    const [value,setValue]=useState()
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                   <MenuBookOutlinedIcon/>
                </Typography>
                <Tabs
                  sx={{ml:"auto"}}
                  textColor="inherit"
                  indicatorColor="primary"
                  value={value}
                  onChange={(e,val)=>setValue(val)}
                >
                    <Tab LinkComponent={NavLink} to='/add' label="Add Product"/>
                    <Tab LinkComponent={NavLink} to='/books' label="Books"/>
                    <Tab LinkComponent={NavLink} to='/about' label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header