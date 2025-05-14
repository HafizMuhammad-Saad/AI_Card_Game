import { useState } from 'react';
import { Link } from 'react-router';

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { Box, Card, Stack, Switch, IconButton, CardContent } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';


// ----------------------------------------------------------------------

// const GENDER_OPTIONS = [
//   { value: 'men', label: 'Men' },
//   { value: 'women', label: 'Women' },
//   { value: 'kids', label: 'Kids' },
// ];

// const CATEGORY_OPTIONS = [
//   { value: 'all', label: 'All' },
//   { value: 'shose', label: 'Shose' },
//   { value: 'apparel', label: 'Apparel' },
//   { value: 'accessories', label: 'Accessories' },
// ];

// const RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

// const PRICE_OPTIONS = [
//   { value: 'below', label: 'Below $25' },
//   { value: 'between', label: 'Between $25 - $75' },
//   { value: 'above', label: 'Above $75' },
// ];

// const COLOR_OPTIONS = [
//   '#00AB55',
//   '#000000',
//   '#FFFFFF',
//   '#FFC0CB',
//   '#FF4842',
//   '#1890FF',
//   '#94D82D',
//   '#FFC107',
// ];

// const defaultFilters = {
//   price: '',
//   gender: [GENDER_OPTIONS[0].value],
//   colors: [COLOR_OPTIONS[4]],
//   rating: RATING_OPTIONS[0],
//   category: CATEGORY_OPTIONS[0].value,
// };

export function Settings() {
  const [sortBy, setSortBy] = useState('featured');

  const [openFilter, setOpenFilter] = useState(false);

  // const [filters, setFilters] = useState<FiltersProps>(defaultFilters);
  const [modalOpen, setModalOpen] = useState(false);

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);


  // const handleOpenFilter = useCallback(() => {
  //   setOpenFilter(true);
  // }, []);
  

  // const handleCloseFilter = useCallback(() => {
  //   setOpenFilter(false);
  // }, []);

  // const handleSort = useCallback((newSort: string) => {
  //   setSortBy(newSort);
  // }, []);

  // const handleSetFilters = useCallback((updateState: Partial<FiltersProps>) => {
  //   setFilters((prevValue) => ({ ...prevValue, ...updateState }));
  // }, []);

  // const canReset = Object.keys(filters).some(
  //   (key) => filters[key as keyof FiltersProps] !== defaultFilters[key as keyof FiltersProps]
  // );

  return (
    <DashboardContent maxWidth="xl" sx={{ color: '#fff'}}>


<Box
      sx={{
        minHeight: '100vh',
        px: 4,
        py: 6,
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <Box mb={8} mr={5}>
        <Typography variant="h2" >Setting</Typography>
        <Typography variant="subtitle1" sx={{ color: '#bbb' }}>
          Customize User Experience And Manage Platform Preferences.
        </Typography>
      </Box>

      {/* Change Password */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 3,
                  background: ' #29193C',

          backdropFilter: 'blur(10px)',
          border: '1px solid #FFFFFF',
          color: 'white',
          cursor: 'pointer',
          padding:2
        }}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={500}>
              Change Password
            </Typography>
            <IconButton>
              <img src="/public/icon-park-outline_down.png" alt="" />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>

      {/* Notification Settings */}
<Card  

  sx={{
    borderRadius: 3,
    background: '#29193C',
    backdropFilter: 'blur(10px)',
    border: '1px solid #FFFFFF',
    color: 'white',
    px: 3,
    mt: 3,
    p:4
  }}
   
>
  <CardContent>
    <Stack direction="row" justifyContent="space-between" alignItems="center" 
         >
   
   <Box component={Link} to="/settings/notification" sx={{ textDecoration: 'none' }}>
   <Typography variant="h6" fontWeight={500} color='white'>
          Notification Settings
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: '#ccc', maxWidth: 700 }}
        >
          Manage how you receive notifications to stay informed about what matters most. Enable email
          notifications to receive important updates straight to your inbox, including order confirmations,
          shipping details, and changes to your project status.
        </Typography>

       
      </Box>

      <Switch
        checked={notificationsEnabled}
        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
        component={Link}
    
      />
    </Stack>
  </CardContent>
</Card>

    </Box>

      
      
    </DashboardContent>
  );
}
