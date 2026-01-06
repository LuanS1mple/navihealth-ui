import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Avatar,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  MoreVert as MoreVertIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Favorite as FavoriteIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
function UserCard({user}) {
  return (
    <Card sx={{ borderRadius: 1.5, border: '1px solid #e5e7eb', mb: 2 }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
            mr: 2,
          }}
        >
          {user.avatar}
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 16 }}>
              {user.name}
            </Typography>
            {user.status === 'active' ? (
              <Chip
                label="Hoạt động"
                size="small"
                sx={{
                  backgroundColor: '#f0fdf4',
                  color: '#00a63e',
                  border: '1px solid #b9f8cf',
                  fontSize: 12,
                  height: 22,
                }}
              />
            ) : (
              <Chip
                label="Bị khóa"
                size="small"
                sx={{
                  backgroundColor: '#fef2f2',
                  color: '#e7000b',
                  border: '1px solid #ffc9c9',
                  fontSize: 12,
                  height: 22,
                }}
              />
            )}
            {user.premium !== 'Free' ? (
              <Chip
                label={user.premium}
                size="small"
                sx={{
                  backgroundColor: '#fff7ed',
                  color: '#f54900',
                  border: '1px solid #ffd6a7',
                  fontSize: 12,
                  height: 22,
                }}
              />
            ) : (
              <Chip
                label="Free"
                size="small"
                sx={{
                  backgroundColor: '#fff7ed',
                  color: '#f54900',
                  border: '1px solid #ffd6a7',
                  fontSize: 12,
                  height: 22,
                }}
              />
            )}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, color: '#4a5565', fontSize: 14 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 12 }} />
              <Typography variant="body2">{user.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: 12 }} />
              <Typography variant="body2">{user.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <DescriptionIcon sx={{ fontSize: 12 }} />
              <Typography variant="body2">{user.documents} hồ sơ</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </CardContent>
  </Card>
  )
}

export default UserCard