import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Card, Stack, styled, TextField, IconButton, CardContent, InputAdornment } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

export function Notifications() {
  const CategoryButton = styled(Button)(({ theme }) => ({
    minWidth: '14%',
    padding: '15px',
    borderRadius: '14px',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    '&.MuiButton-contained': {
      backgroundColor: '#807a79',
      color: '#ffffff',
      border: '2px solid white',
      '&:hover': {
        backgroundColor: '#333333',
      },
    },
    '&.MuiButton-text': {
      color: '#b0a9a9',
      border: '2px solid #807a79',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff',
      },
    },
  }));

  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const notifications = [
    {
      title: 'NEW ORDER UPDATE',
      description: "Your Order For 'Epic Fantasy Cards' Has Shipped And Is On Its Way! Track Your Package Here.",
    },
    {
      title: 'PROJECT STATUS ALERT',
      description: "Your Game Project 'Space Odyssey' Has Been Approved! You Can Now Proceed To The Card Editor.",
    },
    {
      title: 'PLATFORM ANNOUNCEMENT',
      description: "We've Just Launched New Fantasy-Themed Templates! Check Them Out And Start Creating Your Next Game.",
    },
    {
      title: 'ORDER CONFIRMATION',
      description: "Your Payment For 'Arcane Quest Cards' Has Been Successfully Processed. Expect Delivery By Next Week.",
    },
    {
      title: 'GAME UPDATE',
      description: "The 'Dungeon Crawler' Game Template Has Been Updated With New Customization Options. Check It Out!",
    }
  ];
  


  return (
    <DashboardContent maxWidth="xl" sx={{ color: '#fff' }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Notifications
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <CategoryButton variant="contained">All Notification</CategoryButton>
            <CategoryButton variant="text" sx={{ minWidth: '8%', p: '15px' }}>Orders</CategoryButton>
            <CategoryButton variant="text" sx={{ minWidth: '8%', p: '15px' }}>Games</CategoryButton>
            <CategoryButton variant="text" sx={{ minWidth: '8%', p: '15px', border: '2px solid #87739E' }}>Other</CategoryButton>
          </Stack>
          
          <TextField
            size="small"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ 
              width: '250px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '14px',
                backgroundColor: 'transparent',
                border: '2px solid #807a79',
                color: '#ffffff',
                '&:hover': {
                  borderColor: '#ffffff',
                },
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
                padding: '10px 14px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#b0a9a9' }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>


      {notifications.map((notification, index) => (
  <Card
    key={index}
    sx={{
      mb: 3,
      borderRadius: 3,
      background: '#29193C',
      backdropFilter: 'blur(10px)',
      border: '1px solid #FFFFFF',
      color: 'white',
      cursor: 'pointer',
      padding: 2
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton>
          <img src="/public/En.png" alt="icon" width={50} />
        </IconButton>
        <Box>
          <Typography variant="subtitle2" fontWeight={600}>
            {notification.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#cfcfcf' }}>
            {notification.description}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
))}

      

    
    </DashboardContent>
  );
}