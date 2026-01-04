import { Box, Button } from '@mui/material'
import React from 'react'
import Account from '../SideBar/Account/Account'
import Logo from '../SideBar/Logo/Logo'
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import HeadBar from '../HeadBar/HeadBar';
function SideBar() {
    const sideBarWidth = '250px'
    const logoHeight = '80px'
    return (
      <>
       
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
          }}>
            <Box>
              <Logo dimension={{sideBarWidth,logoHeight}}/>
              <Box sx={{paddingLeft: '20px', display: 'flex',flexDirection: 'column', gap: 2}}>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<HomeIcon sx={{scale: 1.2}}/>}>Trang chủ</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<DescriptionIcon sx={{scale: 1.2}}/>}>Hồ sơ sức khỏe</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<SmartToyIcon sx={{scale: 1.2}}/>}>AI sức khỏe</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<AccessAlarmIcon sx={{scale: 1.2}}/>}>Quản lí nhắc nhở</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<CleaningServicesOutlinedIcon sx={{scale: 1.2}}/>}>Gói dịch vụ</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<HelpCenterOutlinedIcon sx={{scale: 1.2}}/>}>Trợ giúp</Button>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', width: sideBarWidth, justifyContent:'start',gap: 1}}>
                  <Button sx={{textTransform: 'none', color: 'inherit', height: '50px', fontSize: '1.2rem', borderRadius: '10px', width: '80%', justifyContent:'start'}} startIcon={<ChatBubbleOutlineOutlinedIcon sx={{scale: 1.2}}/>}>Phản hồi</Button>
                </Box>
              </Box>
            </Box>
            <Account dimension={{sideBarWidth,logoHeight}}/>
          </Box>
      </>
    )
}

export default SideBar